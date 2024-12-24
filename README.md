# Stay Zen - Frontend

Welcome to the **Stay Zen** frontend repository! This application is designed to provide users with a seamless hotel booking experience. It features room details, amenities, and a booking system that integrates with a backend API.

## Live URLs

- **Netlify Deployment**: [https://stay-zen.netlify.app/](https://stay-zen.netlify.app/)
- **Surge Deployment**: [https://stay-zen.surge.sh/](https://stay-zen.surge.sh/)

## Features

- **Room Details Page**: View detailed information about available rooms, including amenities, price, and availability.
- **Booking System**: Book rooms for specified dates while ensuring no overlapping bookings.
- **Authentication**: Users must log in to book a room.
- **Responsive Design**: Optimized for all device sizes.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **React Router**: For routing and navigation.
- **Axios**: For HTTP requests to the backend API.
- **React Query**: For data fetching, caching, and state management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Tailwind CSS components for UI elements.
- **SweetAlert2**: For interactive alerts.
- **Moment.js**: For date formatting and manipulation.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stay-zen-frontend.git
   cd stay-zen-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     REACT_APP_API_BASE_URL=https://stay-zen.vercel.app
     ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```plaintext
src/
├── assets/               # Static assets (images, icons, etc.)
├── components/           # Reusable components
├── contexts/             # Context providers (e.g., AuthContext)
├── pages/                # Page components (e.g., RoomDetails, Login)
├── utilities/            # Utility components (e.g., SectionTitle)
├── App.js                # Main application component
├── index.js              # Entry point
└── styles/               # Custom CSS files
```

## Available Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs tests.
- `npm run eject`: Ejects the app (not recommended).

## API Integration

The frontend communicates with the backend API hosted at `https://stay-zen.vercel.app` for room data, bookings, and user authentication.

### Endpoints Used

- `GET /rooms/:id`: Fetch room details.
- `GET /bookings/:id`: Fetch booked dates for a specific room.
- `POST /bookings`: Create a new booking.

## Deployment

### Netlify

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Netlify:
   ```bash
   netlify deploy
   ```

### Surge

1. Install Surge:
   ```bash
   npm install -g surge
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Surge:
   ```bash
   surge ./build https://stay-zen.surge.sh
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Query](https://tanstack.com/query)
- [SweetAlert2](https://sweetalert2.github.io/)

## Contact

For inquiries, please contact [mdalimuzzaman437@gmail.com].
