 // Global variables
 let array = [];

 // Creation of new array with random values
 function generateRandomArray(size) {
     array = [];
     for (let i = 0; i < size; i++) {
         array.push(Math.floor(Math.random() * 400) + 5);
     }
     ImplementArray(array);
 }

 // Visualize the array
 function ImplementArray(arr) {
     const arrayContainer = document.getElementById('array-container');
     arrayContainer.innerHTML = '';

     for (let i = 0; i < arr.length; i++) {
         const bar = document.createElement('div');
         bar.classList.add('array-bar');
         bar.style.height = `${arr[i]}px`;
         arrayContainer.appendChild(bar);
     }
 }

 // Merge Sort algorithm
 async function mergeSort() {
     await mergeSortAlgo(array, 0, array.length - 1);
     ImplementArray(array);
 }

 
 async function mergeSortAlgo(arr, L, H) {
     
     if (L < H) {
         const mid = Math.floor((L + H) / 2);
         await mergeSortAlgo(arr, L, mid);
         await mergeSortAlgo(arr, mid + 1, H);
         await merge(arr, L, mid, H);
     }
 }

 async function merge(arr, L, mid, H) {
     const n1 = mid - L + 1;
     const n2 = H - mid;
     const leftArray = new Array(n1);
     const rightArray = new Array(n2);

     for (let i = 0; i < n1; i++) {
         leftArray[i] = arr[L + i];
     }

     for (let j = 0; j < n2; j++) {
         rightArray[j] = arr[mid + 1 + j];
     }

     let i = 0, j = 0, k = L;

     while (i < n1 && j < n2) {
         if (leftArray[i] <= rightArray[j]) {
             arr[k] = leftArray[i];
             i++;
         } else {
             arr[k] = rightArray[j];
             j++;
         }
         k++;
     }

     while (i < n1) {
         arr[k] = leftArray[i];
         i++;
         k++;
     }

     while (j < n2) {
         arr[k] = rightArray[j];
         j++;
         k++;
     }

     await new Promise((resolve) =>
         setTimeout(() => {
             resolve();
         }, 100)
     );

     ImplementArray(array);
 }

 // Initialize with a random array on page load
 generateRandomArray(48);

 // Reset the array with new random values
 function resetArray() {
     generateRandomArray(48);




 }
