/*
 * ██╗░░░░░██╗███╗░░██╗░██████╗░░░░██████╗░██╗░░░░░░█████╗░░█████╗░██╗░░██╗
 * ██║░░░░░██║████╗░██║██╔════╝░░░░██╔══██╗██║░░░░░██╔══██╗██╔══██╗██║░██╔╝
 * ██║░░░░░██║██╔██╗██║██║░░██╗░░░░██████╦╝██║░░░░░███████║██║░░╚═╝█████═╝░
 * ██║░░░░░██║██║╚████║██║░░╚██╗░░░██╔══██╗██║░░░░░██╔══██║██║░░██╗██╔═██╗░
 * ███████╗██║██║░╚███║╚██████╔╝░░░██████╦╝███████╗██║░░██║╚█████╔╝██║░╚██╗
 * ╚══════╝╚═╝╚═╝░░╚══╝░╚═════╝░░░░╚═════╝░╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝
 *
 * Developed by Yakov V. Panov (C) Ling • Black 2020
 * @site http://ling.black
 */

import {CoreAPIUrl} from "../Core/Core";


export interface FileUploadStoreItemRaw {
	temp_name: string;
	file_path: string;
}

/**
 * Uploads the files
 * @param files
 * @param token
 * @constructor
 */
export async function Upload(files: Blob[], token: string): Promise<FileUploadStoreItemRaw[]> {
	const fd = new FormData();
	files.forEach(v => fd.append("files", v));
	const ft = await fetch(CoreAPIUrl + "files/upload/?token=" + token, {
		method: 'POST',
		body: fd
	});
	return ft.json();
}