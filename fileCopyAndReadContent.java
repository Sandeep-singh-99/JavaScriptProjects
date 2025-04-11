public class fileCopyAndReadContent {
    public static void main(String[] args) {
        // Define the source and destination file paths
        String sourceFilePath = "source.txt";
        String destinationFilePath = "destination.txt";

        // Copy the file
        try {
            java.nio.file.Files.copy(
                java.nio.file.Paths.get(sourceFilePath),
                java.nio.file.Paths.get(destinationFilePath),
                java.nio.file.StandardCopyOption.REPLACE_EXISTING
            );
            System.out.println("File copied successfully.");
        } catch (java.io.IOException e) {
            System.err.println("Error copying file: " + e.getMessage());
        }

        // Read the content of the copied file
        try {
            String content = new String(java.nio.file.Files.readAllBytes(java.nio.file.Paths.get(destinationFilePath)));
            System.out.println("Content of the copied file:");
            System.out.println(content);
        } catch (java.io.IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }
}