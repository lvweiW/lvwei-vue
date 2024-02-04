import {$post} from "@/utils/request";

export const $login = async (params) => {
    return await $post("login", params)
}