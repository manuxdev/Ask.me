import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";
// import axios from "axios";

function Main({ questions }) {
  // let lista = [document.getElementsByClassName(AllQuestions.vote).value];

  // function Burbuja() {
  //   var aux;
  //   for (let i = 0; i < lista.length; i++) {
  //     for (let j = 0; j < lista.length; j++) {
  //       if (lista[i] > lista[i + 1]) {
  //         aux = lista[i];
  //         lista[i] = lista[i + 1];
  //         lista[i + 1] + aux;
  //       }
  //     }
  //   }
  // }

  // class MaxHeap {
  //   constructor() {
  //     this.storage = [];
  //     this.size = 0;
  //   }

  //   getParentIndex(index) {
  //     return Math.floor((index - 1) / 2);
  //   }
  //   getLeftChildIndex(index) {
  //     return 2 * index + 1;
  //   }
  //   getRightChildIndex(index) {
  //     return 2 * index + 2;
  //   }

  //   hasParent(index) {
  //     return this.getParentIndex(index) >= 0;
  //   }
  //   hasLeftChild(index) {
  //     return this.getLeftChildIndex(index) < this.size;
  //   }
  //   hasRightChild(index) {
  //     return this.getRightChildIndex(index) < this.size;
  //   }
  //   parent(index) {
  //     return this.storage[this.getParentIndex(index)];
  //   }

  //   leftChild(index) {
  //     return this.storage[this.getLeftChildIndex(index)];
  //   }

  //   RightChild(index) {
  //     return this.storage[this.getRightChildIndex(index)];
  //   }

  //   swap(index1, index2) {
  //     let temp = this.storage[index1];
  //     this.storage[index1] = this.storage[index2];
  //     this.storage[index2] = temp;
  //   }
  //   insert(data) {
  //     this.storage[this.size] = data;
  //     this.size += 1;
  //     this.heapifyUp();
  //   }
  //   heapifyUp(index) {
  //     if (this.hasParent(index) && this.parent(index) < this.storage[index]) {
  //       this.swap(this.getParentIndex(index), index);
  //       index = this.getParentIndex(index);
  //     }
  //   }

  //   removeMax() {
  //     if (this.size == 0) throw new Error("Empty Heap");
  //     let data = this.storage[0];
  //     this.size -= 1;
  //     this.heapifyDown(0);
  //     return data;
  //   }

  //   heapifyDown(index) {
  //     let smallest = index;

  //     if (
  //       this.hasLeftChild(index) &&
  //       this.storage[smallest] > this.leftChild(index)
  //     )
  //       smallest = this.getLeftChildIndex(index);
  //     if (smallest != index) {
  //       this.swap(index.smallest);
  //       this.heapifyDown(smallest);
  //     }
  //   }
  // }

  // //let value = document.getElementsByClassName(Header.search).value;

  // function BinarySearch(lista, value) {
  //   var low = 0;
  //   var high = lista.length - 1;
  //   while (low <= high) {
  //     var middle = Math.floor((low + high) / 2);
  //     var guess = lista[middle];
  //     if (guess == value) return middle;
  //     if (guess > value) high = middle - 1;
  //     else low = middle + 1;
  //   }
  //   return -1;
  // }

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>

          {/* <a href="/add-question"> */}

          {/* </a> */}
        </div>
        <div className="main-desc">
          <p>{questions.length} questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                {/* <a href="/">Newest</a> */}
                <Link to="/">Newest</Link>
              </div>
              <div className="main-tab">
                <Link to="/">Active</Link>

                {/* <a href="/">Active</a> */}
              </div>
              <div className="main-tab">
                {/* <a href="/">More</a> */}
                <Link to="/">More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          {questions?.map((_q) => (
            <div className="question">
              <AllQuestions data={_q} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
