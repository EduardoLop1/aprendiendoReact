const Corrousel=()=>{
    return(
        
      <div class="container">
      <div class="row">
          <div class="col-sm-12">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://i.postimg.cc/L6LCVFgv/zap2.jpg" class="d-block w-100" alt="estilos" height="450px"/>
                    </div>
                    <div class="carousel-item">
                      <img src="https://i.postimg.cc/rF3n1FpD/zap3.jpg" class="d-block w-100" alt="colores" height="450px"/>
                    </div>
                    <div class="carousel-item">
                      <img src="https://i.postimg.cc/nc27x3yp/zapatos-hombre-portada.jpg" class="d-block w-100" alt="zapatos" height="450px"/>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
          </div>
      </div>
      </div>
    )
}
export default Corrousel;