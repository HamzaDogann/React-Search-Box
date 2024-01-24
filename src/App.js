import { useState } from 'react';
import './App.css';
import './index.css';
import stockIconYok from './yok.svg';
import stockIconVar from './var.svg';



function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className='general-box'>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr style={{display:"flex",alignItems:"center",justifyItems:"center"}}>
      <th style={{ borderBottom: "3px solid gray", borderRadius: "1px", padding: "9px", height:"30px"}} colSpan="2">
        {category}
      </th>
    </tr>
  );
}


function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'gray' }}>
      {product.name}
    </span>;

  const price = product.stocked ? product.price :
    <span style={{ color: 'gray' }}>
      {product.price}
    </span>

const stockstate = product.stocked ? stockIconVar : stockIconYok;

const isStock = (
  <span style={{marginLeft:"5px"}}>
    <img className="custom-svg" src={stockstate} alt='Stock Icon' />
  </span>
);

  return (
    <tr>
      <td className='productBox' style={{color:'green'}}>{name}</td>
      <td className='productBox'>{price}</td>
      <td className='productBox' style={{display:"flex", alignItems:"center",justifyContent:"center"}}>Stokta {isStock} </td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form className='search-box'>
      <input className='input-box'
        type="text"
        value={filterText} placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      
      <label style={{
         display: "flex", 
         alignItems: "center",
          justifyContent: "center" 
         }}>

        <input className='styled-checkbox'
          style={{ marginRight: "10px" }}
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  { category: "Telefonlar", price: "$500", stocked: true, name: "Samsung Galaxy" },
  { category: "Telefonlar", price: "$400", stocked: true, name: "Xiaomi Redmi Note 12 Pro" },
  { category: "Telefonlar", price: "$600", stocked: false, name: "IPhone X" },
  { category: "Bilgisayarlar", price: "$2000", stocked: true, name: "Excalibur" },
  { category: "Bilgisayarlar", price: "$1400", stocked: false, name: "Monster" },
  { category: "Bilgisayarlar", price: "$1800", stocked: true, name: "Asus Tuf Gaming" },
  { category: "Bilgisayarlar", price: "$1800", stocked: true, name: "Dell" },
  { category: "Bilgisayarlar", price: "$1800", stocked: false, name: "Casper Nirvana" }
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}