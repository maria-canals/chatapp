<template>
	<Chat :messages="messages" :student="student" />
</template>

<script>
import Chat from './components/Chat';
import moment from 'moment';

export default {
	name: 'App',
	data() {
		return {
			teacher: {
				id: 1,
				displayName: 'Raul',
				photoURL:
					'https://prague2013.drupal.org/sites/default/files/keynote-aral-balkan-round_1.png',
			},
			student: {
				id: 2,
				displayName: 'Carla',
				photoURL:
					'https://digitalbusiness.com.mx/wp-content/uploads/2017/02/avatar-round-2-1.png',
			},
			messages: [
				{
					id: 0,
					name: 'Primer caso práctico',
					version: '1',
					format: 'pdf',
					size: '3.8MB',
					createdAt: new Date('May 08, 2021 15:59:00'),
					url: 'https://www.descargadeficheros.com/01399jilkl',
					date:
						moment(new Date('May 08, 2021 15:59:00')).format(
							'DD-MM-YYYY/HH:mm'
						) + 'h',
				},
				{
					id: 0,
					name: 'Segundo caso práctico',
					version: '2',
					format: 'pdf',
					size: '3.8MB',
					date:
						moment(new Date('May 09, 2021 16:23:00')).format(
							'DD-MM-YYYY/HH:mm'
						) + 'h',
					createdAt: new Date('May 09, 2021 16:23:00'),
					url: 'https://www.descargadeficheros.com/ZZZ229409laAA',
				},
				{
					id: 2,
					displayName: 'Carla',
					photoURL:
						'https://digitalbusiness.com.mx/wp-content/uploads/2017/02/avatar-round-2-1.png',
					text:
						'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión',
					createdAt: new Date('May 08, 2021 16:00:00'),
					date:
						moment(new Date('May 08, 2021 16:00:00')).format(
							'DD-MM-YYYY/HH:mm'
						) + 'h',
				},
				{
					id: 1,
					displayName: 'Raul',
					photoURL:
						'https://prague2013.drupal.org/sites/default/files/keynote-aral-balkan-round_1.png',
					text:
						'Gran trabajo Carla! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.',
					createdAt: new Date('May 09, 2021 10:24:00'),
					date:
						moment(new Date('May 09, 2021 10:24:00')).format(
							'DD-MM-YYYY/HH:mm'
						) + 'h',
				},
				{
					id: 2,
					displayName: 'Carla',
					photoURL:
						'https://digitalbusiness.com.mx/wp-content/uploads/2017/02/avatar-round-2-1.png',
					text: 'Realizados los cambios según feedback',
					createdAt: new Date('May 09, 2021 16:24:00'),
					date:
						moment(new Date('May 09, 2021 16:24:00')).format(
							'DD-MM-YYYY/HH:mm'
						) + 'h',
				},
				{
					id: 1,
					displayName: 'Raul',
					photoURL:
						'https://prague2013.drupal.org/sites/default/files/keynote-aral-balkan-round_1.png',
					text: 'Perfecto, excelente trabajo',
					createdAt: new Date('May 09, 2021 17:30:00'),
					date:
						moment(new Date('May 09, 2021 17:30:00')).format(
							'DD-MM-YYYY/HH:mm'
						) + 'h',
				},
			],
		};
	},
	components: {
		Chat,
	},
};
</script>
