$('.search-btn').on('click', function () {
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=e8c18b73&s=' + $('.input-keyword').val(),
    success: (results) => {
      const movies = results.Search;
      let cards = '';
      // const movieContainer = document.querySelector('.movie-container');
      movies.forEach((element) => {
        cards += showCards(element);
        // movieContainer.innerHTML = cards;
      });
      // console.log(cards);
      $('.movie-container').html(cards);

      // ketika tombol diklik
      $('.modal-detail-btn').on('click', function () {
        // console.log($(this).data('imdbid'));
        $.ajax({
          url: 'http://www.omdbapi.com/?apikey=e8c18b73&i=' + $(this).data('imdbid'),
          success: (results) => {
            console.log(results);
            const detail = showMovieDetail(results);
            $('.detail-container').html(detail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

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
