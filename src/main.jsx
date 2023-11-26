import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import Area1 from './routes/area1.jsx';
import Area2 from './routes/area2.jsx';
import Area3 from './routes/area3.jsx';
import Area4 from './routes/area4.jsx';
import Area5 from './routes/area6.jsx';
import Area6 from './routes/area6.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/area1",
    element: <Area1 />,
  },
  {
    path: "/area2",
    element: <Area2 />,
  },
  {
    path: "/area3",
    element: <Area3 />,
  },
  {
    path: "/area4",
    element: <Area4 />,
  },
  {
    path: "/area5",
    element: <Area5 />,
  },
  {
    path: "/area6",
    element: <Area6 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
