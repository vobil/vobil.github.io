Here are the Git commands to achieve your goals, along with explanations for each step.

### **1\. Save the current master branch to a tag called 06302025**

This command creates a lightweight tag pointing to the current commit of your master branch.

git checkout master  
git tag 06302025

* git checkout master: Ensures you are on the master branch.  
* git tag 06302025: Creates the tag 06302025 at the current commit of master.

To push the tag to your remote repository (e.g., GitHub), use:

git push origin 06302025

### **2\. Create a new branch called phone\_use to develop from scratch**

This command creates a new branch named phone\_use and switches to it. Since you want to "develop from scratch" on this branch, it will initially be a copy of the master branch at the point you create it.

git checkout \-b phone\_use

* git checkout \-b phone\_use: Creates a new branch named phone\_use and immediately switches your working directory to this new branch.

### **3\. Remove everything from master branch, then copy phone\_use branch's dist/\* folder to the master branch to deploy to GitHub Pages.**

This is a more complex operation, especially if you want to effectively "reset" master and only contain the dist folder from phone\_use. This is a common scenario for GitHub Pages deployments where the master or gh-pages branch serves only the built artifacts.

Here's a robust way to do this, using a temporary branch to manage the dist content, which is safer than direct manipulation on master.

**Important Considerations:**

* **Backup:** Before proceeding, ensure you have committed all important changes on master and phone\_use.  
* **GitHub Pages Branch:** GitHub Pages typically serves from master or a gh-pages branch. This guide assumes master.

#### **Method: Using a Temporary Deployment Branch**

This method involves:

1. Creating a temporary branch from master.  
2. Switching to the phone\_use branch, building your project to ensure dist/ is up-to-date.  
3. Switching to the temporary branch, clearing it, and copying the dist/ content.  
4. Committing and merging this temporary branch back into master using a "squash" merge to keep the history clean.

\# Ensure you're on phone\_use and build your project to update the dist folder  
git checkout phone\_use  
\# \*\*\* Run your build command here, e.g.: \*\*\*  
\# npm run build  
\# Or yarn build  
\# Or python build.py  
\# Make sure the \`dist\` folder is up-to-date and ready for deployment.

\# \--- Now, prepare the master branch for deployment \---

\# 1\. Create a temporary branch from 'master'  
\#    We will prepare the deployment content on this branch.  
git checkout master  
git checkout \-b temp-deploy-for-master

\# 2\. Remove all existing files from the 'temp-deploy-for-master' branch  
\#    except for the .git directory itself.  
git rm \-rf .  
\# This stage deletes all files from the index.  
\# After this, your working directory might appear empty (or show deletions).

\# 3\. Add the 'dist' folder content from 'phone\_use' branch  
\#    We use 'git checkout phone\_use \-- dist/' to bring the files from 'phone\_use'  
\#    into the current branch's working directory and stage them.  
git checkout phone\_use \-- dist/

\# 4\. Move contents of \`dist/\` to the root of the \`temp-deploy-for-master\` branch  
\#    This makes 'index.html' and other assets directly accessible for GitHub Pages.  
mv dist/\* .  
rmdir dist/ \# Remove the now empty dist directory

\# 5\. Add all the copied files to the staging area and commit  
git add \-A  
git commit \-m "Deploy: Updated GitHub Pages content from phone\_use/dist"

\# 6\. Switch back to the 'master' branch  
git checkout master

\# 7\. Merge the 'temp-deploy-for-master' branch into 'master'  
\#    We use \`--squash\` to combine all changes from 'temp-deploy-for-master'  
\#    into a single commit on 'master', keeping 'master' history clean.  
git merge \--squash temp-deploy-for-master  
git commit \-m "Deploy: Updated GitHub Pages with new content from phone\_use"

\# 8\. Delete the temporary deployment branch (optional, but good practice)  
git branch \-d temp-deploy-for-master

\# 9\. Push the updated master branch to GitHub  
git push origin master

\# Remember to also push your phone\_use branch if you've made changes:  
git push origin phone\_use

### **4\. How to Remove Everything from a Branch (Start Over)**

If you want to effectively "empty" a branch and start its history from scratch, there are a couple of ways depending on what you mean by "remove everything."

#### **Method A: Create an Orphan Branch (Completely New History)**

This method creates a brand new branch with no previous commit history, effectively giving you a clean slate.

\# 1\. Ensure you are NOT on the 'phone\_use' branch if you intend to delete it later.  
\#    Switch to 'master' or any other branch first.  
git checkout master

\# 2\. Create a new "orphan" branch named 'phone\_use\_new\_start'.  
\#    This branch will have no history.  
git checkout \--orphan phone\_use\_new\_start

\# 3\. Remove all files from the working directory.  
\#    These files are still from the previous branch, not yet committed to the new orphan branch.  
git rm \-rf .

\# 4\. Create an initial, empty commit on the new orphan branch.  
\#    You can also add new files here before the first commit.  
git commit \--allow-empty \-m "Initial commit for a fresh start on phone\_use"

\# \--- Optional: Replace the old 'phone\_use' with this new one \---  
\# 5\. (Optional) Delete the old 'phone\_use' branch locally.  
\#    BE CAREFUL: This permanently deletes its local history.  
git branch \-D phone\_use

\# 6\. (Optional) Rename the new orphan branch to 'phone\_use'.  
git branch \-m phone\_use\_new\_start phone\_use

\# 7\. (Optional) Force push to overwrite the remote 'phone\_use' branch.  
\#    BE EXTREMELY CAREFUL: This rewrites remote history and can cause issues for collaborators.  
\#    Only do this if you are sure no one else is using the remote 'phone\_use' branch.  
git push \-f origin phone\_use

* git checkout \--orphan \<new\_branch\_name\>: Creates a new branch (e.g., phone\_use\_new\_start) that is not connected to any previous history. It will initially contain all files from your previous branch in the working directory, but they are not staged for commit on this new orphan branch.  
* git rm \-rf .: Removes all files from the staging area and your working directory.  
* git commit \--allow-empty \-m "...": Creates the very first commit on this new branch. You can add new files *before* this commit, or make it an empty initial commit.  
* git branch \-D phone\_use: Deletes the *local* phone\_use branch. Use \-D (capital D) for a "hard delete" which works even if the branch has unmerged changes.  
* git branch \-m \<old\_name\> \<new\_name\>: Renames a branch.  
* git push \-f origin phone\_use: Force pushes to overwrite the remote branch. **Use with extreme caution.**

#### **Method B: Reset Branch to master's State (Simpler if master is your desired "empty" state)**

If "removing everything" means you want phone\_use to simply be exactly like master (and master is relatively clean), this is simpler.

\# 1\. Switch to the 'phone\_use' branch.  
git checkout phone\_use

\# 2\. Reset the 'phone\_use' branch to the state of 'master'.  
\#    This discards all commits unique to 'phone\_use' and makes it point to master's HEAD.  
\#    '--hard' changes your working directory and index to match 'master'.  
git reset \--hard master

\# 3\. Force push to update the remote 'phone\_use' branch.  
\#    This rewrites the history of 'phone\_use' on the remote.  
\#    Again, use with extreme caution if others are collaborating.  
git push \-f origin phone\_use

* git reset \--hard master: This powerful command moves the phone\_use branch pointer to the same commit as master, and then resets your working directory and staging area to match that commit. All commits that were unique to phone\_use will be discarded.  
* git push \-f origin phone\_use: Required to force the remote phone\_use branch to match your locally reset branch.

This detailed process ensures that your master branch effectively becomes a "deploy-only" branch containing just your build artifacts, while phone\_use remains your development branch.