const currentYear = new Date().getFullYear();
document.getElementById("c-year").textContent = currentYear;

fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		const cardsContainer = document.querySelector(".cards");

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
	})
	.catch((error) => console.error("Error fetching data:", error));
