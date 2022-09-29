const selectRef = document.querySelector(".select-wrapp");
const listRef = document.querySelector(".select__dropdown");

const onClick = (e) => {
  listRef.classList.toggle("is-hidden");
};

const onClickList = (e) => {
  const target = e.target;
  if (target.tagName === "LI") {
    console.log(target.dataset.value);
  }
};

selectRef.addEventListener("click", onClick);
listRef.addEventListener("click", onClickList);