import { useEffect, useState } from "react";
import { auth } from "@/src/config/firebaseConfig";
import { signOut, updatePassword, reauthenticateWithCredential, EmailAuthProvider, User } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Profile() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState(''); // State for current password
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        setEmail(user.email || '');
      }
    });
    return () => unsubscribe();
  }, []);

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
        if (password) {
          await updatePassword(user, password);
        }
        toast.success("Profile updated successfully");
      }
    } catch (err: any) {
      if (err.code === 'auth/requires-recent-login') {
        toast.error("Please re-authenticate to update your profile.");
        await reauthenticate();
        handleUpdate(); 
      } else {
        toast.error(err.message);
      }
    }
  };

  return (
    <>
      <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-27.5 xl:pt-45">
      </section>
    </>
  );
}
