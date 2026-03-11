import { UserModel } from "../models/user.model";

export const userView = (users: UserModel[]) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Tambahan CSS manual untuk memastikan input terlihat rapi */
        input:focus {
            outline: 2px solid #2563eb;
            border-color: transparent;
        }
    </style>
</head>

<body class="bg-gray-100 p-4 md:p-10">

    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-blue-600 mb-6">
            User Management (Clean Structure)
        </h1>

        <form method="POST" action="/create" class="flex gap-2 mb-6">
            <input 
                name="name" 
                placeholder="Name" 
                class="border border-gray-400 p-2 rounded w-full bg-white text-gray-800"
                required
            />
            <input 
                name="role" 
                placeholder="Role" 
                class="border border-gray-400 p-2 rounded w-full bg-white text-gray-800"
                required
            />
            <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">
                Add
            </button>
        </form>

        <div class="bg-white shadow-sm border border-gray-200 rounded-sm">
            ${users.length === 0 
                ? `<div class="p-6 text-center text-gray-500 italic">No users found in database.</div>` 
                : users.map(user => `
                <div class="flex justify-between items-center p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
                    <div class="text-lg">
                        <span class="font-semibold text-gray-800">${user.name}</span>
                        <span class="text-gray-600 ml-1">(${user.role})</span>
                    </div>

                    <div class="flex items-center gap-4">
                        <span class="text-xs text-gray-300 italic">ID: ${user.id}</span>
                        
                        <form method="POST" action="/delete/${user.id}">
                            <button class="bg-red-500 text-white px-4 py-1 rounded text-sm font-bold hover:bg-red-600 transition">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            `).join("")}
        </div>
    </div>

</body>
</html>
`;