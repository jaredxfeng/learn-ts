"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let now = new Date();
console.log(now);
console.log(typeof now);
// years, months, days, times
console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate', now.getDate());
console.log('getDay', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());
// timestamps, aka. milliseconds since 1970
console.log('timestamp', now.getTime());
// date strings;
console.log('toDateString', now.toDateString());
console.log('toTimeString', now.toTimeString());
console.log('toLocaleString', now.toLocaleString());
// actually, easier to use timestamps than date objects
// aka. outputs from .getTime()
// diff between two timestamps
const before = new Date('2024-07-29T13:02:00Z');
const diff = now.getTime() - before.getTime();
const minsDiff = Math.round(diff / 1000 / 60);
const hoursDiff = Math.round(minsDiff / 60);
const daysDiff = Math.round(hoursDiff / 24);
console.log(daysDiff, "days difference");
// convert timestamps into date objects
const timeStamp = 1724958365405;
console.log(new Date(timeStamp));
const date_fns_1 = require("date-fns");
console.log('isToday(now)', (0, date_fns_1.isToday)(now));
console.log('isToday(before)', (0, date_fns_1.isToday)(before));
// date-fns formatting options
console.log('format(now)', (0, date_fns_1.format)(now, 'yyyy-MMM-dd HH:mm:ss'));
console.log('format(now)', (0, date_fns_1.format)(now, 'EEEE MMMM dd, yyyy HH:mm:ss'));
console.log('formatDistance', (0, date_fns_1.formatDistance)(before, now, { addSuffix: true }));
