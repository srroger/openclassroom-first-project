import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	posts = [
		{
			title: "Mon premier post",
			content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida id est a vestibulum. Etiam condimentum nulla mauris, at scelerisque nisi commodo quis. Sed eu iaculis velit. Quisque sed volutpat diam, vel sodales velit. Pellentesque volutpat nulla nec lorem sollicitudin, ut pretium sem pellentesque. Nunc congue diam risus, ac ultrices lorem maximus in. Sed ultrices volutpat odio, at feugiat tortor sagittis sit amet. Aliquam erat volutpat. Vivamus tempor est at efficitur semper.orbi facilisis est sit amet molestie elementum. Curabitur id risus vitae lacus commodo commodo vitae dapibus justo. Nunc egestas vitae nibh in auctor. Phasellus nec sapien orci. Quisque in justo tristique, efficitur ante vel, feugiat tortor. Ut at dapibus eros, sit amet blandit libero. Curabitur sit amet rutrum ante.",
			loveIts: 0,
			created_at: new Date()
		},
		{
			title: "Mon deuxieme post",
			content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida id est a vestibulum. Etiam condimentum nulla mauris, at scelerisque nisi commodo quis. Sed eu iaculis velit. Quisque sed volutpat diam, vel sodales velit. Pellentesque volutpat nulla nec lorem sollicitudin, ut pretium sem pellentesque. Nunc congue diam risus, ac ultrices lorem maximus in. Sed ultrices volutpat odio, at feugiat tortor sagittis sit amet. Aliquam erat volutpat. Vivamus tempor est at efficitur semper.orbi facilisis est sit amet molestie elementum. Curabitur id risus vitae lacus commodo commodo vitae dapibus justo. Nunc egestas vitae nibh in auctor. Phasellus nec sapien orci. Quisque in justo tristique, efficitur ante vel, feugiat tortor. Ut at dapibus eros, sit amet blandit libero. Curabitur sit amet rutrum ante.",
			loveIts: 5,
			created_at: new Date()
		},
		{
			title: "Mon troisieme post",
			content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida id est a vestibulum. Etiam condimentum nulla mauris, at scelerisque nisi commodo quis. Sed eu iaculis velit. Quisque sed volutpat diam, vel sodales velit. Pellentesque volutpat nulla nec lorem sollicitudin, ut pretium sem pellentesque. Nunc congue diam risus, ac ultrices lorem maximus in. Sed ultrices volutpat odio, at feugiat tortor sagittis sit amet. Aliquam erat volutpat. Vivamus tempor est at efficitur semper.orbi facilisis est sit amet molestie elementum. Curabitur id risus vitae lacus commodo commodo vitae dapibus justo. Nunc egestas vitae nibh in auctor. Phasellus nec sapien orci. Quisque in justo tristique, efficitur ante vel, feugiat tortor. Ut at dapibus eros, sit amet blandit libero. Curabitur sit amet rutrum ante.",
			loveIts: -3,
			created_at: new Date()
		}
	];

}
