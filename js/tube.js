const loadVideo = async () => {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await res.json();
    console.log(data.data);
    const tabContainer = document.getElementById('tab-container');
    data.data.slice(0,4).forEach((element) => {
      const div = document.createElement('div');
      div.innerHTML = ` 
            <h5 class="tab btn bg-secondary ">${element.category}</h5>
            

      `;
      tabContainer.appendChild(div);
      console.log(element.category)
      

      
    });
    

};
 loadVideo();


// const loadVideo = async () => {
//   try {
//     const res = await fetch(
//       "https://openapi.programming-hero.com/api/videos/categories"
//     );
//     if (!res.ok) {
//       throw new Error("Failed to fetch categories");
//     }
//     const data = await res.json();
//     const tabContainer = document.getElementById("tab-container");
//     data.data.slice(0, 4).forEach((element) => {
//       const tab = document.createElement("a");
//       tab.classList.add("tab");
//       tab.textContent = element.category;
//       tabContainer.appendChild(tab);
//       console.log(element.category);
//     });
//   } catch (error) {
//     console.error("Error loading video categories:", error);
//   }
// };

// loadVideo();
