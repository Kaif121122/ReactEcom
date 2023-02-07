
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;
    font-family: 'Montserrat', sans-serif;
}

body{
    
  background-color:${({ theme }) => theme.colors.dark_Black_color};
}
.container{
    max-width:144rem;
    margin:auto;
}

.flex{
    display:flex;
}

.flex-col{
    flex-direction:column;
}

.justify-between{
    justify-content:space-between;
}

.justify-around{
    
    justify-content:space-around;
}

.justify-center{

    justify-content:center;
}

.align-center{
    
    align-items:center;
}

.item-center{
    justify-content:center;
    align-items:center;
}

.align-end{
    
    align-items:flex-end;
}

.gap-1{
    gap:1rem !important;
}

.gap-2{
    gap:2rem !important;
}

.gap-3{
    gap:3rem;
}

.grid{
    display:grid;
    gap:5rem;
}

.grid-1-gap{
    
    display:grid;
    gap:1rem;
}

.grid-1-2-col{
    grid-template-columns:0.5fr 1fr;
}

.grid-02-1-col{
    grid-template-columns:0.2fr 1fr;
}

.grid-2-col{
    grid-template-columns:repeat(2,1fr);
}

.grid-2-hero-col{
    grid-template-columns:0.6fr 1fr;
}

.grid-3-col{
    grid-template-columns:repeat(3,1fr);
}

.grid-4-col{
    grid-template-columns:repeat(4,1fr);
}

.grid-5-col{
    grid-template-columns:repeat(5,1fr);
}

h1{
    font-size:5.5rem;
    color:${({ theme }) => theme.colors.grey_color};
}

h2{
    font-size:5rem;
    color:${({ theme }) => theme.colors.grey_color};
}

h3{
    font-size:3rem;
    color:${({ theme }) => theme.colors.grey_color};
}

p{
    font-size:2rem;
    color:${({ theme }) => theme.colors.grey_color};
    opacity:0.8;
}

.common-link{

    text-decoration:none;

}

.loading-container{
  
background-color:${({ theme }) => theme.colors.light_Black_color};
color:${({ theme }) => theme.colors.grey_color};
font-size:3rem;
height:20vh;
}


figure{
    position: relative;
    overflow: hidden;
    cursor:pointer;

    &::after{
        position: absolute;
        content:'';
        inset: 0;
        width: 0%;
        height: 100%;
        background-color:rgba(0,0,0,0.5);
        transition:all 0.2s linear;
    }
    &:hover::after{
        width: 100%;
    }
    
    &:hover img{
        
    transform:scale(1.2);
    }
}

.product-img{
    max-width:100%;
    height: 25rem;
    object-fit:cover;
}


.color-btn{
    width: 2.5rem;
    height: 2.5rem;
    border-radius:100%;
    border: none;
    opacity: 0.7;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
    
  
}


.active{
    opacity: 1;
}

.selected-icon{
          color: white;
          font-size: 1.7rem;
          z-index: 2;
          display: block;
          margin: auto;
      }
      
      .warning{
        background-color:orangered;
      }

      
.common-inputs{
    background-color:${({ theme }) => theme.colors.grey_color};
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    display: block;
    color:${({ theme }) => theme.colors.dark_Black_color};
    padding: 1.6rem 2.4rem;
    font-family: 'Montserrat', sans-serif;
    
  }

  .common-inputs:hover{

    outline: 1px solid ${({ theme }) => theme.colors.teal_color};
  }

  .single-product-image{
    max-width: 100%;
    min-width:15rem;
    height: auto;
    cursor: pointer;
}

  @media screen and (max-width:${({ theme }) => theme.media.laptop}) {
    html{
        font-size:60%;
    }

    .grid-2-hero-col{
        grid-template-columns: 1fr;
    }

    .left-container{
        order:2;
    }

    .right-container{
        order:1;
    }

    .total_items{
        display:none;
    }

    .grid-view{
        grid-template-columns:repeat(2,1fr);
    }

    .list-view{
        gap:3rem !important;

    }

    .list-view-single,.grid-1-2-col{
        grid-template-columns:1fr;
        

    }

    .cart-img-container,.cartItems-data{

        grid-template-columns:1fr;
    justify-items: center;
    }

    .feature-products{
        
        grid-template-columns:repeat(2,1fr);
    }

    .total-image-container{
        flex-direction:row;
        order:2;
    }

    .shown-image-container{
        order:1;
    }
.product-container{
    grid-template-columns:1fr;
}

.single-product-image{
    min-width:9rem;
}
    
  }


  @media screen and (max-width:${({ theme }) => theme.media.tab}) {
    html{
        font-size:55%;
    }

    .service-container{
        flex-direction:column;
    }

    

    .grid-02-1-col{
        grid-template-columns:1fr;
    }
    
    .sort-container{
        padding:0;
        
    }

    .cart-heading{
        grid-template-columns:1fr;
        
    justify-items: center;
    }

    .cart-btn-container{
        flex-direction:column;
    }
    
}

@media screen and (max-width:${({ theme }) => theme.media.mob}) {
    html{
        font-size:50%;
    }

    .service-container{
        flex-direction:column;
    }

    .grid-view{
        grid-template-columns:1fr;


    }

    .product-img{
        width:63rem;
    }

    .feature-products{
        
        grid-template-columns:1fr;
    }

}
`