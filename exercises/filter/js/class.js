"use strict"

class Elements{
    constructor(color, shape, price) {
        this.color = color;
        this.shape = shape;
        this.price = price;
      }
}

const element1 = new Elements("#3D2357", "square", 0);
const element2 = new Elements("#3D2357", "circle", 20);
const element3 = new Elements("#E53D00", "square", 40);
const element4 = new Elements("#E53D00", "circle", 0);
const element5 = new Elements("#150578", "square", 20);
const element6 = new Elements("#150578", "circle", 40);
const element7 = new Elements("#3D2357", "square", 60);
const element8 = new Elements("#3D2357", "circle", 80);
const element9 = new Elements("#E53D00", "square", 100);
const element10 = new Elements("#E53D00", "circle", 60);
const element11 = new Elements("#150578", "square", 80);
const element12 = new Elements("#150578", "circle", 100);


export const color = ["#3D2357", "#E53D00", "#150578"];
export const shape = ["square", "circle"];
export const price = [0, 100];
export const filterArray = new Elements ([], [], []);
export const elementArray = [element1, element2, element3, element4, element5, element6, element7, element8, element9, element10, element11, element12];
