// import { useMemo } from 'react';
// import { useLocation, Link } from 'react-router-dom';

// const Breadcrumbs = () => {
//   const location = useLocation();

//   const breadcrumbs = useMemo(() => {
//     const pathnames = location.pathname.split('/').filter(x => x);

//     const breadcrumbs = [{ label: 'Home', to: '/' }];

//     if (pathnames[0] === 'product' && pathnames.length === 2) {
//       breadcrumbs.push({ label: 'Products', to: '/products' });
//       breadcrumbs.push({ label: `Product ${pathnames[1]}`, to: `/product/${pathnames[1]}` });
//     }

//     if (pathnames[0] === 'cart') {
//       breadcrumbs.push({ label: 'Cart', to: '/cart' });
//     }

//     if (pathnames[0] === 'checkout') {
//       breadcrumbs.push({ label: 'Cart', to: '/cart' });
//       breadcrumbs.push({ label: 'Checkout', to: '/checkout' });
//     }

//     if (pathnames[0] === 'product-details' && pathnames.length === 2) {
//       breadcrumbs.push({ label: 'Products', to: '/products' });
//       breadcrumbs.push({ label: 'Product Details', to: `/product-details/${pathnames[1]}` });
//     }

//     return breadcrumbs;
//   }, [location.pathname]);

//   return (
//     <nav>
//       <ol className="breadcrumb">
//         {breadcrumbs.map((breadcrumb, index) => (
//           <li key={index} className="breadcrumb-item">
//             {index === breadcrumbs.length - 1
//               ? breadcrumb.label
//               : <Link to={breadcrumb.to}>{breadcrumb.label}</Link>}
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumbs;
