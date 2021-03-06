import React from 'react';
import Grid from '@material-ui/core/Grid';

import CombinedContextProvider from './context';
import ProductsContainer from './containers/Products';
import CartContainer from './containers/Cart';
import Layout from './components/Layout';
import Cart from './components/Cart';

const App = props => {
  return (
    <CombinedContextProvider {...props}>
      <Layout>
        <Grid item xs={12}>
          <ProductsContainer>
            {(products, isProductsLoading) => (
              // <SpringBoardContainer
              <CartContainer> 
                {(cart, isCartLoading, updateProductInCart, deleteProductFromCart) => ( // clickTileFromSpringBoard
                  // <SpringBoard
                  //   data={config.data}
                  //   deleteProductFromCart={deleteProductFromCart}
                  // />
                  <Cart
                    cart={cart}
                    products={products}
                    isProductsLoading={isProductsLoading}
                    isCartLoading={isCartLoading}
                    updateProductInCart={updateProductInCart}
                    deleteProductFromCart={deleteProductFromCart}
                  />
                )}
              </CartContainer>
            )}
          </ProductsContainer>
        </Grid>
      </Layout>
    </CombinedContextProvider>
  );
};

export default App;
