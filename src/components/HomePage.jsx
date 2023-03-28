import InventoryItem from './InventoryItem';
import DetailsPanel from './DetailsPanel';

export default function HomePage({ inventory, selectedFilm, setSelectedFilmById, checkoutOrReturnFilmById }) {
    return (
        <div className="page_container">
            <h2>Inventory</h2>
            <div className="section_container">
                {
                    inventory.map(({ id, Title, Poster, copiesAvailable }) => (
                        <InventoryItem
                            key={id}
                            id={id}
                            title={Title}
                            imgUrl={Poster}
                            copiesAvailable={copiesAvailable}
                            setSelectedFilmById={setSelectedFilmById}
                        />
                    ))
                }
                <button onClick={() => setSelectedFilmById(null)}>Clear Selection</button>
            </div>
            {/* will only render if there is a selectedFilm (not null) */}
            {selectedFilm && (
                <DetailsPanel
                    selectedFilm={selectedFilm}
                    checkoutOrReturnFilmById={checkoutOrReturnFilmById}
                />
            )}
        </div>
    );
}

// SC 3/28/2023 6:00 PM release 1 
// import InventoryItem from './InventoryItem';
// import DetailsPanel from './DetailsPanel';

// export default function HomePage({ inventory, selectedFilm, setSelectedFilmById, checkoutOrReturnFilmById }) {
//     return (
//         <div className="page_container">
//             <h2>Popular on Knockbuster</h2>
//             <div className="section_container">
//                 {
//                     inventory.map(({ id, title, imgUrl, copiesAvailable }) => (
//                         <InventoryItem
//                             key={id}
//                             id={id}
//                             title={title}
//                             imgUrl={imgUrl}
//                             copiesAvailable={copiesAvailable}
//                             setSelectedFilmById={setSelectedFilmById}
//                         />
//                     ))
//                 }
//                 <button onClick={() => setSelectedFilmById(null)}>Clear Selection</button>
//             </div>
//             {/* this points to rendering Details panel */}
//             {/* will only render if there is a selectedFilm (not null) */}
//             {selectedFilm && (
//                 <DetailsPanel
//                     selectedFilm={selectedFilm}
//                     checkoutOrReturnFilmById={checkoutOrReturnFilmById}
//                 />
//             )}
//         </div>
//     );
// }

/* Release 0 SC 3/28/2023 2:24 PM
import InventoryItem from './InventoryItem';

export default function HomePage({ inventory }) {
    return (
        <>
            <h2>Inventory</h2>
            <div class="title_container">
                {
                    inventory.map(props => <InventoryItem {...props} />)
                }
            </div>
        </>
    );
}
*/
