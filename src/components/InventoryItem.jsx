export default function InventoryItem({ id, title, imgUrl, copiesAvailable, setSelectedFilmById }) {
  return (
      <div className="inventory_item" onClick={event => {
          event.stopPropagation(); // necessary to prevent container onclick from overriding
          setSelectedFilmById(id);
      }}>
          <h3 className="item_title">{title}</h3>
          <img src={imgUrl} />
          <div className="item_actions">
              {copiesAvailable.current} available
          </div>
      </div>
  );
}

// release 0 SC 3/28/2023 2:25 PM
// export default function InventoryItem({ title, imgUrl, copiesAvailable }) {
//   const checkoutTitle = (event) => {
//       alert(`If you were to check out ${title} there would now be ${copiesAvailable - 1} copies available.`);
//   };

//   return (
//       <div className="inventory_item">
//           <h3 className="item_title">{title}</h3>
//           <img src={imgUrl} />
//           <div className="item_actions">
//               {copiesAvailable} available
//               <button
//                   disabled={copiesAvailable === 0}
//                   onClick={checkoutTitle}
//               >Check Out</button>
//           </div>
//       </div>
//   );
// }