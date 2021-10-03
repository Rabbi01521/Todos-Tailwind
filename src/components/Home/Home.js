import React from "react";

const Home = () => {
  return (
    <div className=" mb-5 mx-auto text-center">
      <div class="hero min-h-screen bg-base-200">
        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-5 sm:grid-cols-1 grid md:grid-cols-3 gap-4">
        <div class="card bordered">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" alt="bg" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Top image
              <div class="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>
        <div class="card bordered">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" alt="bg" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Top image
              <div class="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>
        <div class="card bordered">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" alt="bg" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Top image
              <div class="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div class="justify-end card-actions">
              <button class="btn btn-secondary">More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
