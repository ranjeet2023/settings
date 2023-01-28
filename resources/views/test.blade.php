<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



body {
    font-family: 'Sanchez', serif;
    font-size: 12px;
    background: #040E27;
    color: #fff;
    margin: 0 20px;

}

h1 {
    font-size: 36px;
    margin: 30px;
    text-align: center;
    text-transform: uppercase;

}

.container {
    max-width: 768px;
    margin: 2em auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.facts {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

blockfact {
    margin-bottom: 25px;
}

.fact {
    position: relative;
    font-size: 20px;
    line-height: 1.7em;
    word-break: break-word;


}

.fact footer {
    font-size: 0.6em;
    font-weight: 700;
    color: #d3d3cf;
    text-align: right;
}

.fact footer:before {
    content: '\2015';
}

.fact:after {
    content: '\201D';
    position: absolute;
    top: 0.28em;
    right: 0;
    font-size: 6em;
    font-style: italic;
    color: #e7e6e4;
    z-index: -1;
}

/* loader */

.loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    opacity: 0;

}


.loader.show {
    opacity: 1;
}

.loader div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #f4f4f4;
    animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.loader div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
}

.loader div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
}

.loader div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
}

@keyframes loader {
    0% {
        top: 8px;
        height: 64px;
    }

    50%,
    100% {
        top: 24px;
        height: 32px;
    }
}
        </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">

        <div class="facts">

        </div>

        <div class="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script>
let total = 0;
const factsEl = document.querySelector('.facts');
const loader = document.querySelector('.loader');
const getfacts = async (page, limit) => {
    const API_URL = `https://stage.thediamondport.com/api/wh_search_diamond?page=2`;
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
}
const showfacts = (facts) => {
    facts.forEach(fact => {
        const factEl = document.createElement('blockfact');
        factEl.classList.add('fact');
        factEl.innerHTML = `
            ${fact.fact}
        `;
        factsEl.appendChild(factEl);
    });
};
const hideLoader = () => {
    loader.classList.remove('show');
};

const showLoader = () => {
    loader.classList.add('show');
};
const hasMorefacts = (page, limit, total) => {
    const startIndex = (page - 1) * limit + 1;
    return total === 0 || startIndex < total;
};

const loadfacts = async (page, limit) => {
    // show the loader
    showLoader();
    try {
        // if having more facts to fetch
        if (hasMorefacts(page, limit, total)) {
            // call the API to get facts
            const response = await getfacts(page, limit);
            // show facts
            showfacts(response.data);
            // update the total
            total = response.total;
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        hideLoader();
    }
};
window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 &&
        hasMorefacts(currentPage, limit, total)) {
        currentPage++;
        loadfacts(currentPage, limit);
    }
}, {
    passive: true
});
loadfacts(currentPage, limit);
    </script>
</body>
</html>
