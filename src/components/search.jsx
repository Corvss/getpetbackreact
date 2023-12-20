import React from "react";

const Search = () => {
    return ( 
        <main className="bg-black" style={{minHeight: '70vh'}}>
        <div className="album py-5 bg-dark">
          <form className="col-12 col-lg-auto mb-3 me-lg-3 d-flex justify-content-center" role="search">
            <input type="search" className="form-control form-control-dark" style={{width: '50%'}} list="pets" placeholder="Поиск..." aria-label="Search" />
            <datalist id="pets">
              <option value="Кошка">
              </option><option value="Собака">
              </option><option value="Корова">
              </option><option value="Хомяк">
              </option><option value="Птица">
              </option></datalist>
          </form>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-center">
              <div className="col">
                <div className="card shadow-sm d-flex">
                  <img className="bd-placeholder-img card-img-top" src="image/4.jpg" />
                  <div className="card-body">
                    <p className="card-text">Пропал котенок! Белая шерсть, голубые глаза, очень игривый.</p>
                    <p className="card-text">Адрес: ул. Кораблестроителей 183, Василеостровский район</p>
                    <p className="card-text">Дата: 20.01.2023</p>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div className="btn-group">
                        <a href="card1.html"><button type="button" className="btn btn-sm btn-outline-secondary">Подробнее</button></a>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Откликнуться</button>
                      </div>
                      <small className="text-body-secondary" style={{color: 'white !important', paddingTop: '1em'}}>Сейчас</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm d-flex">
                  <img className="bd-placeholder-img card-img-top" src="image/5.jpg" />
                  <div className="card-body">
                    <p className="card-text">Пропала кошка! Серая шерсть, голубые глаза, спокойная и доверчивая.</p>
                    <p className="card-text">Адрес: ул. Сталина 13, <br />Приморский район</p>
                    <p className="card-text">Дата: 10.11.2023</p>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                      <div className="btn-group">
                        <a href="card2.html"><button type="button" className="btn btn-sm btn-outline-secondary">Подробнее</button></a>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Откликнуться</button>
                      </div>
                      <small className="text-body-secondary" style={{color: 'white !important', paddingTop: '1em'}}>1 мин. назад</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination justify-content-center p-3">
            <li className="page-item">
              <a className="page-link" href="search.html">Начало</a>
            </li>
            <li className="page-item"><a className="page-link" href="search.html">1</a></li>
            <li className="page-item"><a className="page-link" href="search2.html">2</a></li>
            <li className="page-item"><a className="page-link" href="search3.html">3</a></li>
            <li className="page-item">
              <a className="page-link" href="search3.html">Конец</a>
            </li>
          </ul>
        </div>
      </main>
    );
  }
 
export default Search;