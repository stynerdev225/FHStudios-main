import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Music } from './pages/Music';
import { Tours } from './pages/Tours';
import { Videos } from './pages/Videos';
import { Store } from './pages/Store';
import { Contact } from './pages/Contact';
import { Listen } from './pages/Listen';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { MerchDetail, BookDetail } from './pages/ProductPages';
import { AllMerchandise } from './pages/store/AllMerchandise';
import { AllDigitalReleases } from './pages/store/AllDigitalReleases';
import { AllBooks } from './pages/store/AllBooks';
import { AllClassics } from './pages/store/AllClassics';
import { About } from './pages/About';

// Create a ScrollToTop component
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-black min-h-screen">
        <ScrollToTop />
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/music",
        element: <Music />
      },
      {
        path: "/tours",
        element: <Tours />
      },
      {
        path: "/videos",
        element: <Videos />
      },
      {
        path: "/store",
        element: <Store />
      },
      {
        path: "/store/merch/:id",
        element: <MerchDetail />
      },
      {
        path: "/store/books/:id",
        element: <BookDetail />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/listen",
        element: (
          <ProtectedRoute requiresSubscription>
            <Listen />
          </ProtectedRoute>
        )
      },
      {
        path: "/store/all-merchandise",
        element: <AllMerchandise />
      },
      {
        path: "/store/all-digital-releases",
        element: <AllDigitalReleases />
      },
      {
        path: "/store/all-books",
        element: <AllBooks />
      },
      {
        path: "/store/all-classics",
        element: <AllClassics />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
