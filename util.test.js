// Rishabh Maheshwari @M521837

const { getRequiredIndexs1, getRequiredIndexs2 } = require("./util.js");

let datalist = [1,3,4,5,6,7,5,4,3,6,4,4,5];

test('empty datalist testcase', () => {
    expect(()=>{
        getRequiredIndexs2([], 0, 0)}).toThrow(
        "Invalid Input: currentIndex out of bounds"
    );
    expect(()=>{
        getRequiredIndexs1([], 0, 0)}).toThrow(
        "Invalid Input: currentIndex out of bounds"
    );
});

test('empty datalist testcase', () => {
    expect(()=>{
        getRequiredIndexs2([], undefined, 0)}).toThrow(
            "Invalid Input: currentIndex must be an integer"
        );
    expect(()=>{
        getRequiredIndexs1([], undefined, 0)}).toThrow(
        "Invalid Input: currentIndex must be an integer"
        );
});

test('negative numItemToShow testcase', () => {
    expect(()=>{
        getRequiredIndexs2(datalist, 0, -2)}).toThrow(
        "Invalid Input: numItemToShow must be 0 or a positive integer"
    );
    expect(()=>{
        getRequiredIndexs1(datalist, 0, -2)}).toThrow(
        "Invalid Input: numItemToShow must be 0 or a positive integer"
    );
});

test('negative currentIndex testcase', () => {
    expect(()=>{
        getRequiredIndexs2(datalist, -1, 0)}).toThrow(
        "Invalid Input: currentIndex out of bounds"
    );
    expect(()=>{
        getRequiredIndexs1(datalist, -1, 0)}).toThrow(
        "Invalid Input: currentIndex out of bounds"
    );
});

test('currentIndex > datalist.length testcase', () => {
    expect(()=>{
        getRequiredIndexs2(datalist, 13, 0)}).toThrow(
        "Invalid Input: currentIndex out of bounds"
    );
    expect(()=>{
        getRequiredIndexs1(datalist, 13, 0)}).toThrow(
        "Invalid Input: currentIndex out of bounds"
    );
});

test('simple testcase even', () => {
    expect(getRequiredIndexs2(datalist, 3, 2)).toEqual([3,4]);
    expect(getRequiredIndexs1(datalist, 3, 2)).toEqual([3,4]);
});

test('simple testcase odd', () => {
    expect(getRequiredIndexs2(datalist, 3, 3)).toEqual([2,3,4]);
    expect(getRequiredIndexs1(datalist, 3, 3)).toEqual([2,3,4]);
});

test('simple testcase even', () => {
    expect(getRequiredIndexs2(datalist, 4, 4)).toEqual([3,4,5,6]);
    expect(getRequiredIndexs1(datalist, 3, 3)).toEqual([2,3,4]);
});

test('simple testcase even', () => {
    expect(getRequiredIndexs2(datalist, 6, 6)).toEqual([4,5,6,7,8,9]);
    expect(getRequiredIndexs1(datalist, 6, 6)).toEqual([4,5,6,7,8,9]);
});

test('simple testcase left edge current even', () => {
    expect(getRequiredIndexs2(datalist, 0, 4)).toEqual([0,1,2,3]);
    expect(getRequiredIndexs1(datalist, 0, 4)).toEqual([0,1,2,3]);
});

test('simple testcase left edge current odd', () => {
    expect(getRequiredIndexs2(datalist, 0, 3)).toEqual([0,1,2]);
    expect(getRequiredIndexs1(datalist, 0, 3)).toEqual([0,1,2]);
});

test('simple testcase right edge current even', () => {
    expect(getRequiredIndexs2(datalist, 12, 4)).toEqual([9,10,11,12]);
    expect(getRequiredIndexs1(datalist, 12, 4)).toEqual([9,10,11,12]);
});

test('simple testcase right edge current odd', () => {
    expect(getRequiredIndexs2(datalist, 12, 3)).toEqual([10,11,12]);
    expect(getRequiredIndexs1(datalist, 12, 3)).toEqual([10,11,12]);
});

test('overflow testcase right edge current even', () => {
    expect(getRequiredIndexs2(datalist, 12, 14)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
    expect(getRequiredIndexs1(datalist, 12, 14)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
});

test('overflow testcase right edge current odd', () => {
    expect(getRequiredIndexs2(datalist, 12, 15)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
    expect(getRequiredIndexs1(datalist, 12, 15)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
});

test('overflow testcase left edge current even', () => {
    expect(getRequiredIndexs2(datalist, 0, 14)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
    expect(getRequiredIndexs1(datalist, 0, 14)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
});

test('overflow testcase left edge current odd', () => {
    expect(getRequiredIndexs2(datalist, 0, 15)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
    expect(getRequiredIndexs1(datalist, 0, 15)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
});

test('overflow testcase even', () => {
    expect(getRequiredIndexs2(datalist, 6, 14)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
    expect(getRequiredIndexs1(datalist, 6, 14)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
});

test('overflow testcase odd', () => {
    expect(getRequiredIndexs2(datalist, 6, 15)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
    expect(getRequiredIndexs1(datalist, 6, 15)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
});

test('equal testcase', () => {
    expect(getRequiredIndexs2(datalist, 6, 13)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
    expect(getRequiredIndexs1(datalist, 6, 13)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12]);
});