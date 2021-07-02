"use strict"

class Elements{
    constructor(color, shape, price) {
        this.color = color;
        this.shape = shape;
        this.price = price;
      }
}

const object1 = new Elements("#3D2357", "square", 0);
const object2 = new Elements("#3D2357", "circle", 20);
const object3 = new Elements("#E53D00", "square", 40);
const object4 = new Elements("#E53D00", "circle", 0);
const object5 = new Elements("#150578", "square", 20);
const object6 = new Elements("#150578", "circle", 40);
const object7 = new Elements("#3D2357", "square", 60);
const object8 = new Elements("#3D2357", "circle", 80);
const object9 = new Elements("#E53D00", "square", 100);
const object10 = new Elements("#E53D00", "circle", 60);
const object11 = new Elements("#150578", "square", 80);
const object12 = new Elements("#150578", "circle", 100);


export const color = ["#3D2357", "#E53D00", "#150578"];
export const shape = ["square", "circle"];
export const price = [0, 100];
export const filterArray = new Elements ([], [], []);
export const objectArray = [object1, object2, object3, object4, object5, object6, object7, object8, object9, object10, object11, object12];
