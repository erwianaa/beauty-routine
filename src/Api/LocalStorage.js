
const ROUTINE_KEY = "routines";

function initializeRoutine() {
	if (!localStorage.getItem(ROUTINE_KEY)) {
		localStorage.setItem(ROUTINE_KEY, JSON.stringify([{
		  "id": "1",
		  "name": "Rutinitas Makeup Sekolah (Example Routine)",
		  "description": "Rutinitas makeup sederhana untuk tampilan natural di sekolah, cocok untuk semua remaja yang ingin tampil segar dan percaya diri.",
		  "steps": [
			{
			  "id": "1",
			  "order": 1,
			  "productName": "Clinique Moisture Surge 72-Hour Auto-Replenishing Hydrator",
			  "stepDescription": "Oleskan Clinique Moisture Surge ke wajahmu setelah mencuci muka. Ambil sedikit produk di ujung jari, lalu aplikasikan dengan gerakan memijat lembut ke seluruh wajah, termasuk area sekitar mata. Pastikan produk meresap dengan baik sebelum melanjutkan ke langkah berikutnya.",
			  "duration": "1 menit",
			  "imageUrl": "https://placehold.co/100x100"
			},
			{
			  "id": "2",
			  "order": 2,
			  "productName": "Maybelline Dream Fresh BB Cream",
			  "stepDescription": "Setelah moisturizer meresap, ambil Maybelline Dream Fresh BB Cream secukupnya. Gunakan jari atau spons makeup untuk mengaplikasikan BB cream ke wajah. Mulailah dari tengah wajah dan ratakan ke arah luar, pastikan untuk mencakup dahi, pipi, dan dagu. Lakukan hingga wajah tampak merata dan alami.",
			  "duration": "2 menit",
			  "imageUrl": "https://placehold.co/100x100"
			},
			{
			  "id": "3",
			  "order": 3,
			  "productName": "NARS Radiant Creamy Concealer",
			  "stepDescription": "Ambil NARS Radiant Creamy Concealer dan gunakan aplikatornya untuk menempelkan concealer pada area yang ingin ditutupi, seperti noda atau lingkaran hitam di bawah mata. Dengan jari atau kuas kecil, tap lembut pada concealer untuk meratakannya. Pastikan untuk tidak menggosok agar hasilnya tetap halus.",
			  "duration": "1 menit",
			  "imageUrl": "https://placehold.co/100x100"
			},
			{
			  "id": "4",
			  "order": 4,
			  "productName": "Laura Mercier Translucent Loose Setting Powder",
			  "stepDescription": "Setelah concealer, gunakan Laura Mercier Translucent Powder untuk mengunci makeup. Ambil sedikit produk dengan kuas besar, lalu tepuk-tepuk kuas untuk menghilangkan kelebihan. Aplikasikan dengan gerakan melingkar di area yang telah dipoles makeup untuk menghindari kilau berlebih.",
			  "duration": "1 menit",
			  "imageUrl": "https://placehold.co/100x100"
			},
			{
			  "id": "5",
			  "order": 5,
			  "productName": "Milani Baked Blush",
			  "stepDescription": "Ambil Milani Baked Blush dengan kuas blush dan senyum untuk menemukan tulang pipi. Oleskan blush ke bagian pipi dengan gerakan melingkar, mulai dari bagian luar menuju dalam. Pastikan warna merata dan tidak terlalu tebal agar terlihat natural.",
			  "duration": "1 menit",
			  "imageUrl": "https://placehold.co/100x100"
			},
			{
			  "id": "6",
			  "order": 6,
			  "productName": "L'Oreal Paris Voluminous Lash Paradise Mascara",
			  "stepDescription": "Dengan L'Oreal Paris Voluminous Lash Paradise Mascara, mulai dari akar bulu mata. Gunakan gerakan zig-zag saat mengaplikasikan untuk memberikan volume maksimal. Aplikasikan satu atau dua lapisan sesuai keinginan, pastikan tidak ada gumpalan.",
			  "duration": "1 menit",
			  "imageUrl": "https://placehold.co/100x100"
			},
			{
			  "id": "7",
			  "order": 7,
			  "productName": "Burt's Bees 100% Natural Moisturizing Lip Balm",
			  "stepDescription": "Untuk menyelesaikan rutinitas, ambil Burt's Bees Lip Balm dan oleskan pada bibir. Pastikan untuk melapisi seluruh permukaan bibir dengan lembut. Jika ingin sedikit warna, pilih lip balm dengan tint alami.",
			  "duration": "1 menit",
			  "imageUrl": "https://placehold.co/100x100"
			}
		  ]}
		]));
	}
}

function getRoutines() {
	const storedRoutines = localStorage.getItem(ROUTINE_KEY);
	return storedRoutines ? JSON.parse(storedRoutines) : [];
}

function getRoutineByID(routineID) {
	const routines = getRoutines();
	return routines.find(routine => routine.id === routineID) || null;
}

function saveRoutine(routine) {
	const storedRoutines = localStorage.getItem(ROUTINE_KEY);
	const routinesArray = storedRoutines ? JSON.parse(storedRoutines) : [];
	
    routine.id = routinesArray.length + 1;
	routinesArray.push(routine);
	
    localStorage.setItem(ROUTINE_KEY, JSON.stringify(routinesArray));
}

function clearRoutines() {
	localStorage.removeItem(ROUTINE_KEY);
	initializeRoutine();
}

export default {
	initializeRoutine,
	saveRoutine,
	getRoutines,
	getRoutineByID,
	clearRoutines,
}