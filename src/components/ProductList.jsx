import React from 'react'
import { useFilterGlobalContext } from '../context/FilterContext'
import GridView from './GridView'
import ListView from './ListView'


const ProductList = () => {

    const { isFilterLoading, totalProducts, filterProducts, grid_view } = useFilterGlobalContext();

    if (isFilterLoading) {
        return <div className="loading-container container flex item-center">.....Loading</div>
    }

    if (grid_view === true) {
        return <GridView product={filterProducts} />
    }

    if (grid_view === false) {
        return <ListView product={filterProducts} />
    }


}

export default ProductList