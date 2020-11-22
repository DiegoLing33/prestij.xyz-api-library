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

import {BlizzardUser, BlizzardUserRaw} from "../Users/BlizzardUser";
import {ConfirmRaw, ConfirmRaws, RawWithId} from "../Core/Raw";
import {CreateRequest, LimitResponse} from "../Core/Core";

// --------------------------------------
//             POST COMMENTS
// --------------------------------------

export interface PostCommentRawBase {
	reply_id?: number;
	post_id: number;
	text: string;
}

export interface PostCommentRawCreate extends PostCommentRawBase {
	token: string;
}

export interface PostCommentRaw extends PostCommentRawBase {
	id: number;
	user_id: number;

	created: string;
	user: BlizzardUserRaw;
}

export class PostComment extends RawWithId<PostCommentRaw> {
	protected __user: BlizzardUser = ConfirmRaw(this.getRaw().user, BlizzardUser);

	public getUser(): BlizzardUser {
		return this.__user;
	}

	public getUserId(): number {
		return this.getRaw().user_id;
	}

	public getCreatedString(): string {
		return this.getRaw().created;
	}

	public getPostId(): number {
		return this.getRaw().post_id;
	}

	public getReplyId(): number | undefined {
		return this.getRaw().reply_id;
	}

	public getText(): string {
		return this.getRaw().text;
	}
}

export async function AddComment(data: PostCommentRawCreate): Promise<PostComment> {
	return ConfirmRaw(
		await CreateRequest<PostCommentRaw>("posts/comment", data, "POST"),
		PostComment
	)
}

export async function DeleteComment(data: { comment_id: number, token: string }): Promise<boolean> {
	return await CreateRequest<boolean>("posts/comment", data, "DELETE");
}

// --------------------------------------
//             POST CATEGORY
// --------------------------------------


export interface PostCategoryRawBase {
	title: string;
	url: string;
}

export interface PostCategoryRawCreate extends PostCategoryRawBase {
	token: string;
}

export interface PostCategoryRaw extends PostCategoryRawBase {
	id: number;

	user_id: number;
	created: string;

	user: BlizzardUserRaw;
}

export class PostCategory extends RawWithId<PostCategoryRaw> {
	protected __user: BlizzardUser = ConfirmRaw(this.getRaw().user, BlizzardUser);

	public getUser(): BlizzardUser {
		return this.__user;
	}

	public getUserId(): number {
		return this.getRaw().user_id;
	}

	public getCreatedString(): string {
		return this.getRaw().created;
	}

	public getTitle(): string {
		return this.getRaw().title;
	}

	public getUrl(): string {
		return this.getRaw().url;
	}
}

export async function AddCategory(data: PostCategoryRawCreate): Promise<PostCategory> {
	return ConfirmRaw(
		await CreateRequest<PostCategoryRaw>("posts/categories", data, "POST"),
		PostCategory,
	)
}

export async function GetCategories(): Promise<PostCategory[]> {
	return ConfirmRaws(
		await CreateRequest<PostCategoryRaw[]>("posts/categories", {}, "GET"),
		PostCategory,
	)
}

// --------------------------------------
//              POST LIKE
// --------------------------------------


export interface PostLikeRawBase {
	post_id: number;
}

export interface PostLikeRawCreate extends PostLikeRawBase {
	token: string;
}

export interface PostLikeRaw extends PostLikeRawBase {
	id: number;

	user_id: number;
}

export class PostLike extends RawWithId<PostLikeRaw> {
	public getUserId(): number {
		return this.getRaw().user_id;
	}

	public getPostId(): number {
		return this.getRaw().post_id;
	}
}

export async function LikePost(data: PostLikeRawCreate): Promise<boolean> {
	return await CreateRequest("posts/like", data, "POST");
}

export async function UnlikePost(data: PostLikeRawCreate): Promise<void> {
	return await CreateRequest("posts/unlike", data, "POST");
}

// --------------------------------------
//                POST
// --------------------------------------


export interface PostRawBase {
	title: string;
	category_id: number;
	content: string;
	tags: string;
	image: string;
}

export interface PostRawCreate extends PostRawBase {
	token: string;
}

export interface PostRaw extends PostRawBase {
	id: number;

	user_id: number;
	created: string;

	category: PostCategoryRaw;
	likes: PostLikeRaw[];
	comments: PostCommentRaw[];
	user: BlizzardUserRaw;
}

export class Post extends RawWithId<PostRaw> {
	protected __category = ConfirmRaw(this.getRaw().category, PostCategory);
	protected __likes = ConfirmRaws(this.getRaw().likes, PostLike);
	protected __comments = ConfirmRaws(this.getRaw().comments, PostComment);
	protected __user = ConfirmRaw(this.getRaw().user, BlizzardUser);

	public getCategory(): PostCategory {
		return this.__category;
	}

	public getUser(): BlizzardUser {
		return this.__user;
	}

	public getComments(): PostComment[] {
		return this.__comments;
	}

	public getLikes(): PostLike[] {
		return this.__likes;
	}

	public getUserId(): number {
		return this.getRaw().user_id;
	}

	public getCreatedString(): string {
		return this.getRaw().created;
	}
}

export async function AddPost(data: PostRawCreate): Promise<Post> {
	return ConfirmRaw(
		await CreateRequest<PostRaw>("posts", data, "POST"),
		Post,
	)
}

export async function EditPost(postId: number, data: PostRawCreate): Promise<boolean> {
	return await CreateRequest("posts/" + postId, data, "POST");
}

export async function DeletePost(postId: number, data: PostRawCreate): Promise<boolean> {
	return await CreateRequest("posts/" + postId, data, "DELETE");
}

/**
 * Returns the post
 * @param postId
 * @constructor
 */
export async function GetPost(postId: number): Promise<Post> {
	return ConfirmRaw(
		await CreateRequest<PostRaw>("posts/" + postId),
		Post
	);
}

/**
 * Returns the posts
 * @param props
 * @constructor
 */
export async function GetPosts(props: { offset?: number, limit?: number } = {}): Promise<LimitResponse<Post>> {
	const offset = props.offset || 0;
	const limit = props.limit || 100;

	// Filter
	const data = await CreateRequest<LimitResponse<PostRaw>>('posts', {offset, limit});
	const items = data.response.items.map(v => ConfirmRaw(v, Post));

	return {request: data.request, response: {...data.response, items}};
}

/**
 * Returns the posts by category
 * @param categoryId
 * @param props
 * @constructor
 */
export async function GetPostsByCategory(categoryId: number, props: { offset?: number, limit?: number } = {}): Promise<LimitResponse<Post>> {
	const offset = props.offset || 0;
	const limit = props.limit || 100;

	// Filter
	const data = await CreateRequest<LimitResponse<PostRaw>>('posts/category/' + categoryId, {offset, limit});
	const items = data.response.items.map(v => ConfirmRaw(v, Post));

	return {request: data.request, response: {...data.response, items}};
}