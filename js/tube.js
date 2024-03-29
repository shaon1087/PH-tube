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
  if(data.data.length === 0){
    errorContainer.classList.remove('hidden');
  }
  else{
    errorContainer.classList.add("hidden");
  }

  const cardContainer = document.getElementById("card-container");const verifiedIcon = document.getElementById("verified-icon").innerHTML;

   cardContainer.innerHTML = "";
  //  time calculater
  function hoursToMinutes(totalSeconds){
    const totalMinutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const result = hours + "hours" + minutes + " min ago";
    return result;
  }

  data.data.forEach((id) => {
    console.log(id.title);
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

loadVideo(1000);






// <div>${id?.authors[0]?.verified ? verifiedIcon : ""}</div>;




// loadAllCard();

// const loadAllCategory = async () => {
//   const response = await fetch(
//     "https://openapi.programming-hero.com/api/videos/categories"
//   );
//   const data = await response.json();
//   // console.log(data.data);

//   const AllData = data.data;

//   const tabContainer = document.getElementById("tab-container");

//   AllData.forEach((category) => {
//     // console.log(category.category);
//     const div = document.createElement("div");
//     div.innerHTML = `<h5 onclick="loadAllCategoryId(${category.category_id})" class="tab btn">${category.category}</h5>`;
//     tabContainer.appendChild(div);
//     // console.log(category.category_id);
//   });
// };

// // for card

// const loadAllCategoryId = async (allId) => {
//   const response = await fetch(
//     `
//         https://openapi.programming-hero.com/api/videos/category/${allId}
//         `
//   );

//   const data = await response.json();
//   const errorContainer = document.getElementById("error-container");

//   // for error field

//   if (data.data.length === 0) {
//     errorContainer.classList.remove("hidden");
//   } else {
//     errorContainer.classList.add("hidden");
//   }

//   const cardContainer = document.getElementById("card-container");
//   const verifiedIcon = document.getElementById("verified-icon").innerHTML;

//   // for time convertion

//   function toHoursAndMinutes(totalSeconds) {
//     const totalMinutes = Math.floor(totalSeconds / 60);
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     const result = hours + " hours " + minutes + " mins ago";

//     return result;
//   }

//   cardContainer.innerHTML = "";

//   // for display card

//   data.data.forEach((id) => {
//     const time = toHoursAndMinutes(id.others.posted_date);

//     const div = document.createElement("div");
//     div.innerHTML = `
//             <div class="card w-full bg-base-100 shadow-xl">
//                 <figure><img class="w-full h-48"
//                     src=${id.thumbnail}
//                   />
//                   <div class="absolute bottom-[130px] right-1 bg-black text-white rounded">
//                         <p class="text-sm">${
//                           id?.others?.posted_date ? time : ""
//                         }</p>
//                     </div>
//                   </figure>
//                 <div class="card-body">
//                     <div class="flex gap-2">
//                         <div class="w-8 h-8">
//                             <img class="w-full h-full rounded-full" src=${
//                               id.authors[0].profile_picture
//                             } />
//                         </div>
//                         <div>
//                             <h1 class="text-base font-bold">${id.title}</h1>
//                             <div class="flex">
//                                 <p class="text-sm font-normal">${
//                                   id.authors[0].profile_name
//                                 }</p>
//                                 <div>
//                                     ${
//                                       id?.authors[0]?.verified
//                                         ? verifiedIcon
//                                         : ""
//                                     }
//                                 </div>
//                             </div>
//                             <div>
//                                 <p class="text-sm font-normal">${
//                                   id.others.views
//                                 } VIEWS</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     `;
//     cardContainer.appendChild(div);
//   });
// };

// loadAllCategory();
// loadAllCategoryId(1000);

// // for blog

// function blogBtn() {
//   window.location.href = "blog.html";
// }
