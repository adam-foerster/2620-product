// This code will be moved to after the footer is created
const pagename = document.title.split("|")[1].trim();

fetch("./data.json")
	.then((response) => response.json())
	.then((data) => {
		const cardsContainer = document.querySelector(".toolCards");
		console.log(cardsContainer);
		if (cardsContainer !== null) {
			data.succulentTools.forEach((tool) => {
				const card = document.createElement("div");
				card.className = "card";

				const img = document.createElement("img");
				img.src = tool.image;
				img.alt = tool.name;

				const info = document.createElement("div");

				const title = document.createElement("h3");
				title.textContent = tool.name;

				const description = document.createElement("p");
				description.textContent = tool.description;

				const price = document.createElement("p");
				price.className = "text-green-500 font-semibold";
				price.textContent = tool.price;

				const addToCartButton = document.createElement("button");
				addToCartButton.className = "button";
				addToCartButton.textContent = "Add to Cart";
				addToCartButton.onclick = () => {
					alert(`${tool.name} has been added to your cart!`);
				};

				info.appendChild(title);
				info.appendChild(description);
				info.appendChild(price);
				info.appendChild(addToCartButton);
				card.appendChild(img);
				card.appendChild(info);
				cardsContainer.appendChild(card);
			});
		}

		// Set navigation links
		const nav = document.getElementById("nav-bar");
		const ul = document.createElement("ul");
		ul.className =
			"nav-links md:flex space-x-4 items-center w-full justify-end mx-4";
		data.navData.links.forEach((link) => {
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.href = link.url;

			switch (pagename.toLowerCase()) {
				case link.name.toLowerCase():
					li.className = "active";
					break;
				default:
					li.className = "";
			}

			a.textContent = link.name;
			li.appendChild(a);
			ul.appendChild(li);
		});
		nav.appendChild(ul);
	})
	.catch((error) => console.error("Error fetching data:", error));

// Set page header
const header = document.getElementById("header");
const imgDiv = document.createElement("div");
imgDiv.className = "flex col-span-3 items-center";

const logo = document.createElement("img");
const logoText = document.createElement("p");
switch (pagename.toLowerCase()) {
	case "home":
		logo.src = "./images/logo.svg";
		break;
	default:
		logo.src = "../images/logo.svg";
}
logo.width = 75;
logo.height = 75;
logo.alt = "Little Leaf Kits Logo";

logoText.textContent = `Little Leaf Kits | ${pagename}`;
imgDiv.appendChild(logo);
imgDiv.appendChild(logoText);

const linkDiv = document.createElement("div");
linkDiv.className = "flex space-x-4 justify-end";

const links = [
	{ name: "cart", url: "#" },
	{ name: "account", url: "#" },
];

links.forEach((link) => {
	const a = document.createElement("a");
	a.href = link.url;
	a.className = " hover:border-black border-x border-green-100 p-2";

	const img = document.createElement("img");
	switch (pagename.toLowerCase()) {
		case "home":
			img.src = `./images/${link.name}.svg`;
			break;
		default:
			img.src = `../images/${link.name}.svg`;
	}
	img.width = 30;
	img.height = 30;
	img.alt = `${link.name} icon`;

	a.appendChild(img);
	linkDiv.appendChild(a);
});

header.className = "bg-green-100 grid grid-cols-4 items-center pr-2";

header.appendChild(imgDiv);
header.appendChild(linkDiv);

//Set Page Footer
const footer = document.querySelector("footer");
footer.className = "bg-green-100 p-4 mt-4";

const footerDiv = document.createElement("div");
footerDiv.className = "flex justify-center text-center";

const footerP = document.createElement("p");
footerP.innerHTML = `&copy; <span id="c-year"></span> DWDD2620 | All rights reserved.`;

footerDiv.appendChild(footerP);
footer.appendChild(footerDiv);

// Set the current year now that the element exists
const currentYear = new Date().getFullYear();
document.getElementById("c-year").textContent = currentYear;
