# Super Track - Vehicle Rental & Ticketing

A responsive front-end for exploring and booking rental vehicles. Super Track brings together cars, bikes, taxis, buses, and planes in a single, easy-to-navigate rental experience.

[View the live demo](https://aashisx.github.io/Project-1/)

## Highlights

- Browse rental services from the home-page carousel and service cards.
- Explore a vehicle catalogue with luxury, economy, performance, and bike categories.
- Filter vehicles by category and daily price; sort by price or rating.
- Select pickup and return dates with client-side date validation.
- Favourite vehicles during the current browser session.
- Check current weather for a selected city on the booking page.
- Submit a booking request through an in-page form with validation and confirmation feedback.
- Use responsive login/sign-up and about/team pages.

> This is a front-end demonstration project. Accounts, favourites, and booking requests are not stored on a server, and no real payment or reservation is created.

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- jQuery and jQuery UI
- Font Awesome and Google Material Icons
- WeatherAPI for the booking-page weather lookup

## Run locally

No build step or package installation is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/aashisx/Project-1.git
   cd Project-1
   ```

2. Open `index.html` in a modern browser.

For the most reliable experience, serve the folder with a local static server - for example, VS Code's **Live Server** extension - then open the address it provides. An internet connection is needed for CDN-hosted fonts/icons, remote vehicle images, and the weather feature.

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Landing page with featured services and navigation |
| `booking.html` | Search, filter, favourite, and book from the vehicle catalogue |
| `shop.html` | Compact vehicle-type booking form and image slider |
| `login.html` | Sign-in/sign-up interface |
| `about.html` | Project overview and team section |

## Project structure

```text
Project-1/
|- index.html
|- booking.html
|- shop.html
|- login.html
|- about.html
`- assets/
   |- css/       # Page-specific styles
   |- js/        # Page interactions and catalogue data
   |- images/    # Local image assets
   |- media/     # Video assets
   `- vendor/    # Bundled third-party browser libraries
```

## Team

- Aashish Karki - Developer
- Deepesh Bastola - Designer
- Kismat Giri - Developer

