export default function DetailsPanel({ selectedFilm, checkoutOrReturnFilmById }) {
  const { id, Title, Poster, copiesAvailable, Rated, Plot } = selectedFilm;

  return (
      <div className="section_container">
          <h2>details</h2>
          <div className="basic_container_column">
              <h3>{Title}</h3>
              <div className="basic_container_row align_center">
                  <img src={Poster} />
                  <p>{Plot}</p>
                  <pre style={{ fontSize: "40px" }}>{Rated}</pre>
              </div>
              <div className="basic_container_column">
                  {copiesAvailable.current} / {copiesAvailable.total} available
                  <div className="basic_container_row">
                      <button
                          disabled={copiesAvailable.current === 0}
                          onClick={() => checkoutOrReturnFilmById(id, "checkout")}
                      >Check out</button>
                      <button
                          disabled={copiesAvailable.current === copiesAvailable.total}
                          onClick={() => checkoutOrReturnFilmById(id, "return")}
                      >Return</button>
                  </div>
              </div>

          </div>
      </div>
  );
}

// release 1 SC 3/28/2023 5:59 PM
// selectedFilm
// Homepage 23 note
// App 10 note

// checkoutOrReturnFilmById
// app 24
// homepage 4 passed in object
// homepage 23 note
// */


// export default function DetailsPanel({ selectedFilm, checkoutOrReturnFilmById }) {
//   // this destructures the selectedFilm object
//   const { id, title, imgUrl, copiesAvailable, rating, description } = selectedFilm;

//   return (
//       <div className="section_container">
//           <h2>details</h2>
//           <div className="basic_container_column">
//               <h3>{title}</h3>
//               <div className="basic_container_row align_center">
//                   <img src={imgUrl} />
//                   <p>{description}</p>
//                   <pre style={{ fontSize: "40px" }}>{rating}</pre>
//               </div>
//               <div className="basic_container_column">
//                   {copiesAvailable.current} / {copiesAvailable.total} available
//                   <div className="basic_container_row">
//                       <button
//                           disabled={copiesAvailable.current === 0}
//                           onClick={() => checkoutOrReturnFilmById(id, "checkout")}
//                       >Check out</button>
//                       <button
//                           disabled={copiesAvailable.current === copiesAvailable.total}
//                           onClick={() => checkoutOrReturnFilmById(id, "return")}
//                       >Return</button>
//                   </div>
//               </div>

//           </div>
//       </div>
//   );
// }