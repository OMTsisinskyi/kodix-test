import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private readonly httpService: HttpService) {}
  
  //TODO: Add pagination
  getPosts(): Observable<any> {
    const posts = this.httpService
      .get('https://jsonplaceholder.org/posts')
      .pipe(map((response: AxiosResponse) => response.data));
    if (!posts) throw new NotFoundException("Can't get posts");
    return posts;
  }

  getPostWithComments(id: number): Observable<AxiosResponse<any>> {
    const postRequest = this.httpService.get(
      `https://jsonplaceholder.org/posts/${id}`,
    );
    const commentsRequest = this.httpService.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );

    const postWithComments = forkJoin([postRequest, commentsRequest]).pipe(
      switchMap(([post, comments]) => {
        const userId = post?.data?.userId;
        if (userId) {
          return this.getUserById(userId).pipe(
            map((user) => {
              return {
                ...post.data,
                userName: user?.data?.name || 'Unknown',
                comments: comments.data,
              };
            }),
            catchError((error) => {
              console.error('Error fetching user data:', error);
              return of({
                ...post.data,
                userName: 'Unknown',
                comments: comments.data,
              });
            }),
          );
        } else {
          return of({
            ...post.data,
            userName: 'Unknown',
            comments: comments.data,
          });
        }
      }),
      catchError((error) => {
        console.error('Error in forkJoin:', error);
        return of({
          post: null,
          comments: [],
        });
      }),
    );

    if (!postWithComments)
      throw new NotFoundException('Error fetching post data');
    return postWithComments;
  }

  getUserById(id: number): Observable<AxiosResponse<any>> {
    return this.httpService.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
  }
}
