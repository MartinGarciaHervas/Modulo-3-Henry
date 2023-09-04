const fs = require("fs");
const utils = require("../utils/request.js");
const process = require("process");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date())
}

function echo(print, args) {
    print(args)
}

function ls(print) {
    fs.readdir('.', (error, files)=>{
        if (error) throw error;
        print(files.join(' '))
    })
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error) throw error;
        print(data);
    })
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error)  throw error;
        print(data.split('\n')[0]); // split('\n') lo divide en lineas, y mediante el [0] accedo a la primera
    })
}

function tail(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if (error) throw error;
        let enLineas = data.split('\n')
        print(enLineas[enLineas.length - 1].trim());
    })
}

function curl(print, args) {
    utils.request(args, (error, response)=>{
        if(error) throw error;
        print(response);
    })
}

module.exports = {pwd, date, echo, ls, cat, head, tail, curl};
