import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { PostService } from './post.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('preview')
  getPreviewPost(): Observable<AxiosResponse<any>> {
    return this.postService.getPostWithComments(1);
  }
  @Get()
  getPosts(): Observable<AxiosResponse<any>> {
    return this.postService.getPosts();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getPostWithComments(@Param('id') id: number): Observable<AxiosResponse<any>> {
    const post = this.postService.getPostWithComments(id);
    return post;
  }
}
