/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/svjs-utils
 * License: MIT, see file 'LICENSE'
 */

export class Time {

    static diffInMs(from, to) {
        return to - from
    }

    static diffInSeconds(from, to) {
        return Math.floor((to - from) / 1000)
    }

    static diffInMinutes(from, to) {
        return Math.floor((to - from) / 1000 / 60)
    }

    static diffInHours(from, to) {
        return Math.floor((to - from) / 1000 / 60 / 60)
    }

    static diffInDays(from, to) {
        return Math.floor((to - from) / 1000 / 60 / 60 / 24)
    }

}