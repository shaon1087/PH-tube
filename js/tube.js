const loadVideo = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const tabContainer = document.getElementById("tab-container");
  data.data.slice(0, 4).forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = ` 
            <h5 onclick="loadAllCard(${element.category_id})" class="tab btn bg-secondary">${element.category}</h5
      `;
    tabContainer.appendChild(div);
  });
};
// for cards
const loadAllCard = async (allId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${allId}`
  );
  const data = await res.json();
  const errorContainer = document.getElementById("error-container");
  //  error field handler
  if (data.data.length === 0) {
    errorContainer.classList.remove("hidden");
  } else {
    errorContainer.classList.add("hidden");
  }

  const cardContainer = document.getElementById("card-container");
  const verifiedIcon = document.getElementById("verified-icon").innerHTML;

  cardContainer.innerHTML = "";
  //  time calculator
  function hoursToMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const result = hours + "hours" + minutes + " min ago";
    return result;
  }

  data.data.forEach((id) => {
    const time = hoursToMinutes(id.others.posted_date);
    const div = document.createElement("div");
    div.innerHTML = `
           <div class="card w-full bg-base-100 shadow-xl">
                <figure><img class="w-full h-48"
                    src=${id.thumbnail}
                  />
                  <div class="absolute bottom-[130px] right-1 bg-black text-white rounded">
                        <p class="text-sm">${
                          id?.others?.posted_date ? time : ""
                        }</p>
                    </div>
                  </figure>
                <div class="card-body">
                    <div class="flex gap-2">
                        <div class="w-8 h-8">
                            <img class="w-full h-full rounded-full" src=${
                              id.authors[0].profile_picture
                            } />
                        </div>
                        <div>
                            <h1 class="text-base font-bold">${id.title}</h1>
                            <div class="flex">
                                <p class="text-sm font-normal">${
                                  id.authors[0].profile_name
                                }</p>
                                <div>
                                ${id?.authors[0]?.verified ? verifiedIcon : ""} 
                                </div>;
                            </div>
                            <div>
                                <p class="text-sm font-normal">${
                                  id.others.views
                                } VIEWS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
    cardContainer.appendChild(div);
  });
};

loadVideo();
loadAllCard(1000);

function blogBtnPage() {
  window.location.href = "blog.html";
}
