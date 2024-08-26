// ketika tombol cari diklik
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', async function () {
  const inputKeyword = document.querySelector('.input-keyword');
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

// ketika tombol show detail diklik
// event binding
document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('modal-detail-btn')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=e8c18b73&i=' + imdbid)
    .then((response) => response.json())
    .then((response) => response);
}

function updateDetail(movieDetail) {
  const detail = showMovieDetail(movieDetail);
  const detailContainer = document.querySelector('.detail-container');
  detailContainer.innerHTML = detail;
}

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=e8c18b73&s=' + keyword)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUI(movies) {
  let cards = '';
  movies.forEach((element) => (cards += showCards(element)));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

function showCards(element) {
  return `<div class="col-md-3 my-3">
								<div class="card">
									<img src="${element.Poster}" class="card-img-top" />
									<div class="card-body">
										<h5 class="card-title">${element.Title}</h5>
										<h6 class="card-subtitle mb-2 text-body-secondary">${element.Year}</h6>
										<a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid = "${element.imdbID}">Show details</a>
									</div>
								</div>
					</div>`;
}

function showMovieDetail(results) {
  return `<div class="container-fluid">
														<div class="row">
															<div class="col-md-3">
																<img class="img-fluid" src="${results.Poster}" alt="" />
															</div>
															<div class="col-md">
																<ul class="list-group">
																	<li class="list-group-item"><h4>${results.Title} (${results.Year})</h4></li>
																	<li class="list-group-item"><strong>Director: </strong> ${results.Director}</li>
																	<li class="list-group-item"><strong>Actors: </strong> ${results.Actors}</li>
																	<li class="list-group-item"><strong>Writer: </strong> ${results.Writer}</li>
																	<li class="list-group-item">
																		<strong>Plot: </strong> <br />
																		${results.Plot}
																	</li>
																</ul>
															</div>
														</div>
													</div>`;
}
