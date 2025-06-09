import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  imports: [FormsModule, MatInputModule, MatCardModule, MatButtonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss',
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postsService: PostService) {

  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.enteredTitle, form.value.enteredContent);
  }
}
