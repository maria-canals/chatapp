<template>
	<Chat :messages="messages" :student="student" />
</template>

<script>
import Chat from './components/Chat';

export default {
	name: 'App',
	data() {
		return {
			teacher: {
				displayName: 'Raul',
				photoURL:
					'https://prague2013.drupal.org/sites/default/files/keynote-aral-balkan-round_1.png',
			},
			student: {
				displayName: 'Carla',
				photoURL:
					'https://digitalbusiness.com.mx/wp-content/uploads/2017/02/avatar-round-2-1.png',
			},
			messages: [
				{
					userId: 2,
					displayName: 'Carla',
					photoURL:
						'https://digitalbusiness.com.mx/wp-content/uploads/2017/02/avatar-round-2-1.png',
					text:
						'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión',
					createdAt: '04 Mayo 2021/ 15:30h',
				},
				{
					userId: 1,
					displayName: 'Raul',
					photoURL:
						'https://prague2013.drupal.org/sites/default/files/keynote-aral-balkan-round_1.png',
					text:
						'Gran trabajo Carla! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.',
					createdAt: '04 Mayo 2021/ 17:00h',
				},
				{
					userId: 2,
					displayName: 'Carla',
					photoURL:
						'https://digitalbusiness.com.mx/wp-content/uploads/2017/02/avatar-round-2-1.png',
					text: 'Realizados los cambios según feedback',
					createdAt: '05 Mayo 2021/ 10:30h',
				},
				{
					userId: 1,
					displayName: 'Raul',
					photoURL:
						'https://prague2013.drupal.org/sites/default/files/keynote-aral-balkan-round_1.png',
					text: 'Perfecto, excelente trabajo',
					createdAt: '05 Mayo 2021/ 12:18h',
				},
			],
		};
	},
	components: {
		Chat,
	},
};
</script>
