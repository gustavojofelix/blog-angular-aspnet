import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/models/category.model';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css'],
})
export class AddBlogpostComponent implements OnDestroy, OnInit {
  model: AddBlogPost;
  createBlogPostSubscription?: Subscription;
  categories$?: Observable<Category[]>;

  constructor(
    private blogPostService: BlogPostService,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.model = {
      author: '',
      content: '',
      featuredImageUrl: '',
      isVisible: true,
      publishedDate: new Date(),
      shortDescription: '',
      title: '',
      urlHandle: '',
      categories: [],
    };
  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }

  onFormSubmit(): void {
    console.log(this.model);

    this.createBlogPostSubscription = this.blogPostService
      .createBlogPost(this.model)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/blogposts');
        },
      });
  }

  ngOnDestroy(): void {
    this.createBlogPostSubscription?.unsubscribe();
  }
}
