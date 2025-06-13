const add = document.querySelector("#add");
const title = document.querySelector("#title");
const url = document.querySelector("#url");
const description = document.querySelector("#description");

const api = `http://10.69.0.17:8100/bookmarks?title=${title.value}&url=${url.value}&description=${description}`;
const token = "2db786ae57233606a3d72a3b29cea1a2";

add.addEventListener("click", async (e) => {
	e.preventDefault();

	await fetch(api, {
		method: "POST",
		headers: {
			Authorization: "bearer ${token}",
		},
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error("Erreur :"));
});

function createList() {
	const li = document.createElement("li");
	const a = document.createElement("a");
	const p = document.createElement("p");

	p.classList.add("description");

	a.setAttribute("href", url);
	a.setAttribute("target", "_blank");

	li.appendChild(a);
	li.appendChild(p);

	a.textContent = title;
	p.textContent = description;
}
