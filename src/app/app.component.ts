import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from "./header/header/header.component";
import { PostListComponent } from './posts/post-list/post-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCreateComponent, HeaderComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  storedPosts: any[] = [];

  onPostAdded(post: any) {
    this.storedPosts.push(post);
  }
}
