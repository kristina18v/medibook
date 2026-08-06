const DOCTORS_URL = "https://dummyjson.com/users";

const specializations = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Dentist",
  "Orthopedic",
  "Ophthalmologist",
  "General Practitioner",
];

const doctorPortraits = {
  male: [
    "https://images.unsplash.com/photo-1645066928295-2506defde470?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1642975967602-653d378f3b5b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1666886573583-9839aafe43cf?auto=format&fit=crop&w=800&q=80",
  ],
  female: [
    "https://images.unsplash.com/photo-1758691462651-611d730c5272?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1659353888633-bc0db91345df?auto=format&fit=crop&w=800&q=80",
  ],
};

function getDoctorImage(user, index) {
  const portraits = doctorPortraits[user.gender] ?? doctorPortraits.male;

  return portraits[index % portraits.length];
}

export async function getDoctors() {
  const response = await fetch(DOCTORS_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch doctors");
  }

  const data = await response.json();

  return data.users.map((user, index) => ({
    ...user,
    image: getDoctorImage(user, index),
    specialization:
      specializations[index % specializations.length],
  }));
}

export async function getDoctor(id) {
  const response = await fetch(`${DOCTORS_URL}/${id}`);

  if (!response.ok) {
    return null;
  }

  const user = await response.json();
  const index = Number(id) - 1;

  return {
    ...user,
    image: getDoctorImage(user, index),
    specialization:
      specializations[index % specializations.length],
  };
}