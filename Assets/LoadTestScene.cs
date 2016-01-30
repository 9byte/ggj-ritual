using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class LoadTestScene : MonoBehaviour {

	public void ClickTest (string input)
	{
		SceneManager.LoadScene(input);
	}
}
