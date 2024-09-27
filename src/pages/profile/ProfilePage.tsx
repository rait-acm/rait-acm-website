import { useEffect, useState } from "react";
import { auth } from "@/src/config/firebaseConfig";
import { signOut, updatePassword, reauthenticateWithCredential, EmailAuthProvider, User } from "firebase/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Field from "./Field";
import FieldDropdown from "./FieldDropdown";
import Modal from "./Modal";

export default function Profile() {

  const navigate = useNavigate();

  // AUTH

  const [email, setEmail] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [showSaveButton, setShowSaveButton] = useState(false);

  const isEmailPasswordSignIn = auth.currentUser?.providerData.some(
    (provider) => provider.providerId === 'password'
  );

  const googleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Successfully signed out");
      navigate("/");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // FIELDS

  const [editableFields, setEditableFields] = useState({
    password: false,
    phoneNumber: false,
    college: false,
    // Add more fields if needed
  });

 // LOAD EMAIL 

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    setUser(user);
    if (user) {
      setEmail(user.email || '');
    }
  });
  return () => unsubscribe();
}, []);

 // CHANGE PASSWORD

  const [password, setPassword] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPasswordModified, setIsPasswordModified] = useState(false);
  const [currentPassword, setCurrentPassword] = useState(''); 
  
  
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const reauthenticate = async (): Promise<void> => {
    if (user && user.email) {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      try {
        await reauthenticateWithCredential(user, credential);
        toast.success("Re-authentication successful");
      } catch (err: any) {
        toast.error("Re-authentication failed: " + err.message);
        throw err; 
      }
    } else {
      toast.error("No user is currently signed in");
    }
  };

  const handleUpdate = async () => {
    try {
      if (user) {
        if (isPasswordModified) {
          openModal();
        } 
      }
    } catch (err: any) {
      if (err.code === 'auth/requires-recent-login') {
      } else {
        toast.error(err.message);
      }
    }
  };

  const handleModalSubmit = async (currentPassword: string) => {
    try {
      if (user) {

        setCurrentPassword(currentPassword);
        console.error(password)
        await updatePassword(user, password);
        toast.success("Password updated successfully");
        setShowSaveButton(false);
        setIsPasswordModified(false);

      }
    } catch (err: any) {
      
        toast.error("Please re-authenticate to update your profile.");
        await reauthenticate();
        handleModalSubmit(currentPassword)
      
      
    } finally {
      closeModal();
    }
  };

// END OF CHANGE PASSWORD
 
  const handleEditClick = (field: keyof typeof editableFields) => {
    if (field === 'password') {
      setIsPasswordModified(true);
      console.error("True")
    }
    setEditableFields(prev => ({
      ...prev,
      [field]: true
    }));
    setShowSaveButton(true);
  };


  return (
    <>
      <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-27.5 xl:pt-45">
      <div className="flex flex-col lg:flex-row justify-evenly lg:space-x-10 ml-8">
      <div className="m-2 mr-10 p-10 lg:p-16 lg:pr-30 lg:pl-30 flex flex-col justify-center items-center bg-gray-100 dark:bg-[#2A2E35]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/2048px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png"
              alt="Description of Image"
              className="w-full h-auto max-w-[200px] max-h-[200px]"
            />
            <p className="mt-4 text-2xl lg:text-3xl text-center text-gray-800 dark:text-white">{user?.displayName}</p>
            <p className="m-4 text-center text-gray-400">{email || "Loading..."}</p>
            <p className="m-4 text-2xl text-center text-gray-800 dark:text-white">Events</p>
            <div className="w-full flex flex-col lg:flex-row justify-evenly">
            <div>
                <p className="mt-4 text-4xl md:text-6xl text-center text-gray-800 dark:text-white">0</p>
                <p className="text-1xl md:text-lg text-center text-gray-800 dark:text-white">registered</p>
              </div>
              <div>
                <p className="mt-4 text-4xl md:text-6xl text-center text-gray-800 dark:text-white">0</p>
                <p className="text-1xl md:text-lg text-center text-gray-800 dark:text-white">participated</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
          <div className="mt-4 flex justify-end mr-6">
          <nav className="text-gray-500 dark:text-gray-400 mr-5">
            <ul className="flex space-x-2">
              <li>
                <p className="text-gray-800 dark:text-white">
                  Settings
                </p>
              </li>
              <li>/</li>
              <li>
                <Link to="/registered-events" className="hover:underline text-gray-800 dark:text-white">
                  Events
                </Link>
              </li>
            </ul>
          </nav>
          </div>
          <div className="flex justify-center m-2 p-10 bg-gray-100 dark:bg-[#2A2E35] rounded-lg shadow-md mr-10">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-20 lg:m-2 lg:p-5 bg-gray-100 dark:bg-[#2A2E35] rounded-lg ">
              {isEmailPasswordSignIn && (
                <Field 
                  label="Password"
                  placeholder="Hidden"
                  onClick={() => handleEditClick('password')}
                  onChange={(e) => setPassword(e.target.value)}
                  isEditable={editableFields.password}
                />
              )}
              <Field 
                label="Phone Number"
                placeholder="Empty"
                onClick={() => handleEditClick('phoneNumber')}
                isEditable={editableFields.phoneNumber}
              />
              <Field 
                label="College"
                placeholder="Empty"
                onClick={() => handleEditClick('college')}
                isEditable={editableFields.college}
              />
              <FieldDropdown
                label="Gender"
                options={['Male', 'Female', 'Transgender']}
                onSelect={() => console.log('Edit button clicked!')}
              />
              <FieldDropdown
                label="State"
                options={['Maharashtra', 'Goa', 'Madhya Pradesh']}
                onSelect={() => console.log('Edit button clicked!')}
              />
            </div>
            </div>
            {showSaveButton ? (
              <div className="mt-4 flex justify-center sm:justify-end mr-6">
                <button
                  className="mr-4 inline-flex bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="mt-4 flex justify-center lg:justify-end mr-6">
                <button
                  className="mr-4 inline-flex bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg"
                  onClick={googleSignOut}
                >
                  Log Out
                </button>
              </div>
            )}
            <Modal 
              isOpen={isModalOpen} 
              onClose={closeModal} 
              onSubmit={handleModalSubmit}
            />
          </div>
        </div>
      </section>
    </>
  );
}
