<template>
	<div class="wrapper">
		<header>
			<h1>Comentarios</h1>
		</header>

		<section>
			<main>
				<div
					class="message"
					v-for="(msg, index) in messages"
					:key="index"
					:class="['message', msg.userId == 1 ? 'teacher' : 'student']"
				>
					<img :src="msg.photoURL" :alt="msg.displayName" />
					<p>
						{{ msg.text }}
						<br />
						{{ msg.createdAt }}
					</p>
				</div>
				<div
					v-for="(doc, index) in documents"
					:key="index"
					:class="'document'"
					class="position-relative"
				>
					<div class="d-flex flex-column align-items-start">
						<p class="mt-3 fw-bold">VERSIÓN {{ doc.version }}</p>
						<p class="fw-bold text-primary">{{ doc.name }}.{{ doc.format }}</p>
						<p>
							Documento/{{ doc.format.toUpperCase() }}&nbsp;&nbsp; ({{
								doc.size
							}})&nbsp;&nbsp; {{ doc.entrega }}
						</p>
					</div>
					<div class="cloud-icon text-primary fs-4">
						<i class="fas fa-cloud-download-alt "></i>
					</div>
				</div>

				<div ref="scrollable"></div>
			</main>

			<form @submit.prevent="sendMessage">
				<input
					v-model="message"
					type="text"
					placeholder="Escriba su mensaje..."
				/>
				<button type="submit" :disabled="!message">
					<i class="fab fa-telegram-plane"></i>
				</button>
			</form>
		</section>
	</div>
</template>

<script>
import { getTime } from '../../utils/app';
export default {
	props: ['messages', 'student'],
	data() {
		return {
			message: '',
			documents: [],
		};
	},
	mounted() {
		this.renderMessages();
	},
	methods: {
		sendMessage() {
			const messageInfo = {
				userId: this.student.id,
				displayName: this.student.displayName,
				photoURL: this.student.photoURL,
				text: this.message,
				createdAt: getTime(),
			};

			const documentData = {
				name: 'Primer caso práctico',
				version: '2',
				format: 'pdf',
				size: '3.8MB',
				entrega: getTime(),
				urlDowload: 'https://downloadexercices.com/92383k',
			};

			this.messages.push(messageInfo);
			this.documents.push(documentData);
			this.message = '';
			this.$refs['scrollable'].scrollIntoView({ behaviour: 'smooth' });
		},
		whichUser() {
			this.isUserTeacher = !this.isUserTeacher;
		},
		renderMessages() {
			return this.messages;
		},
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	margin: 0;
	font-family: arial, sans-serif;
	position: absolute;
}
.wrapper {
	text-align: center;
	max-width: 726px;
	margin: 0 auto;
}
.wrapper header {
	background-color: white;
	height: 7vh;
	min-height: 50px;
	color: black;
	position: fixed;
	width: 100%;
	max-width: 728px;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 99;
	padding: 5px;
	box-sizing: border-box;
	border-bottom: 1px black solid;
}
.wrapper section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	background-color: white;
}
.wrapper section main {
	padding: 10px;
	height: 75vh;
	margin: 10vh 0 10vh;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
}
.wrapper section main::-webkit-scrollbar {
	width: 0.25rem;
}
.wrapper section main::-webkit-scrollbar-track {
	background: white;
}
.wrapper section main::-webkit-scrollbar-thumb {
	background: white;
}
.wrapper section form {
	height: 10vh;
	position: fixed;
	bottom: 0;
	width: 100%;
	max-width: 700px;
	display: flex;
	font-size: 1.5rem;
	align-items: center;
	justify-content: space-around;
}
.wrapper section form button {
	padding: 0;
	width: 15%;
}
.wrapper section form input {
	background-color: rgb(236, 234, 234);
	line-height: 1.5;
	width: 70%;
	height: 40%;
	font-size: 0.75rem;
	color: black;
	padding: 10px 10px;
	border-radius: 15px;
}
.wrapper button {
	border: none;
	text-decoration: none;
	cursor: pointer;
	background-color: white;
}

input:focus-visible {
	outline: transparent;
}
.wrapper button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
.wrapper button,
.wrapper input {
	color: black;
	border: black;
}
.wrapper p {
	max-width: 500px;
	margin-bottom: 12px;
	line-height: 24px;
	padding: 10px 20px;
	border-radius: 25px;
	position: relative;
	color: white;
	text-align: center;
}
.wrapper .message {
	display: flex;
	align-items: center;
	width: auto;
	margin-bottom: 0.75rem;
}
.wrapper .message.teacher p {
	background: #f1f1ff;
	color: #000;
}
.wrapper .message.student {
	flex-direction: row-reverse;
}
.wrapper .message.student p {
	color: #fff;
	background: #0b93f6;
	align-self: flex-end;
}

.wrapper .document {
	display: flex;
	flex-direction: column;
	align-items: start;
	color: black;
	width: 100%;
	border-top: 1px rgba(0, 0, 0, 0.226) solid;
	border-bottom: 1px rgba(0, 0, 0, 0.226) solid;
}

.wrapper .document p {
	color: black;
	padding: 0px;
}
.wrapper .message img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin: 2px 5px;
}
.wrapper .message p {
	display: flex;
	flex-direction: row;
	max-width: 500px;
	margin-bottom: 12px;
	line-height: 24px;
	padding: 10px 20px;
	border-radius: 25px;
	position: relative;
	color: black;
	text-align: center;
	background-color: rgb(241, 225, 225);
}
.fa-telegram-plane {
	color: rgb(11, 103, 156);
	font-size: 1.8rem;
}

.cloud-icon {
	position: absolute;
	top: 40%;
	left: 90%;
}
</style>
